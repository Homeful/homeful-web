import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Camp } from "../../models/camp";
import { Observable } from "rxjs";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { MatDialog } from "@angular/material";
import { CampService } from "../../services/camp.service";
import { switchMap } from "rxjs/operators";
import { Member } from "../../models/member";
import { GeoService } from "../../services/geo.service";
import { CreateMemberComponent } from "../../shared/create-member/create-member.component";

@Component({
  selector: "app-camp-detail",
  templateUrl: "./camp-detail.component.html",
  styleUrls: ["./camp-detail.component.scss"]
})
export class CampDetailComponent implements OnInit {
  campForm: FormGroup;
  camp: Camp = new Camp();
  camp$: Observable<Camp>;
  title = "Add";
  editMode = false;
  addMode = true;
  id: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private campService: CampService,
    private geoService: GeoService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.camp$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get("id");
        if (!!this.id) {
          this.title = "Edit";
          this.setAddMode(false);
          const camp$ = this.campService.get(this.id);
          // TODO: if model doesn't match send error
          return camp$;
        }
        return new Observable<Camp>();
      })
    );
    this.camp$.subscribe(camp => {
      this.camp = camp;
      if (!this.camp.members) this.camp.members = [];
      this.camp.active = true;
      this.campForm.setValue(this.camp);
    });
  }

  createForm() {
    this.campForm = this.fb.group({
      name: ["", Validators.required],
      members: [[]],
      active: [true],
      location: []
    });
  }

  setEditMode(isEditMode: boolean) {
    this.editMode = isEditMode;
    this.setFormAvailability();
  }

  setAddMode(isAddMode: boolean) {
    this.addMode = isAddMode;
    this.setFormAvailability();
  }

  setFormAvailability() {
    if (!this.editMode && !this.addMode) {
      this.campForm.disable();
    } else {
      this.campForm.enable();
    }
  }

  openCreateMemberDialog(event: MouseEvent) {
    event.preventDefault();
    let dialogRef = this.dialog.open(CreateMemberComponent);

    dialogRef.afterClosed().subscribe(member => {
      if (!!member) {
        this.addMember(member);
      }
    });
  }

  // openConfirmDialog(): void {
  //   let dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

  //   dialogRef.afterClosed().subscribe(confirmed => {
  //     if (confirmed) {
  //       this.camp.deleted = true;
  //       this.editMode = true;
  //       this.onSubmit();
  //     }
  //   });
  // }

  prepareSave(): Promise<Camp> {
    return new Promise(resolve => {
      if (!!this.camp.location) {
        resolve(this.createCamp(this.camp.location));
      } else {
        this.geoService.getLocationFromBrowser().then(location => {
          resolve(this.createCamp(location));
        });
      }
    });
  }

  createCamp(location: any): Camp {
    const formModel = this.campForm.value;
    const saveCamp: Camp = {
      name: formModel.name as string,
      location: location,
      members: this.camp.members as Member[],
      active: formModel.active
    };
    return saveCamp;
  }

  addMember(member: Member) {
    const found = this.camp.members.some(m => m.name === member.name);
    if (!found) this.camp.members.push(member);
  }

  removeMember(member: Member) {
    this.camp.members.forEach((m, i) => {
      if (m.name === member.name) {
        this.camp.members.splice(i, 1);
      }
    });
  }

  onSubmit() {
    this.prepareSave().then(camp => {
      if (this.editMode) {
        this.update(camp);
      } else {
        this.add(camp);
      }
      this.router.navigate(["/camps"]);
    });
  }

  add(camp: Camp) {
    this.campService.add(camp);
  }

  update(camp: Camp) {
    this.campService.update(camp, this.id);
  }
}
