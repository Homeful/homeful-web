import { Component, OnInit } from "@angular/core";
import { Member } from "../../models/member";
import { MemberService } from "../../services/member.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-member-detail",
  templateUrl: "./member-detail.component.html",
  styleUrls: ["./member-detail.component.scss"]
})
export class MemberDetailComponent implements OnInit {
  memberForm: FormGroup;
  title: string = "Add";
  member: Member = new Member();
  member$: Observable<Member> = new Observable<Member>();
  editMode: boolean = false;
  addMode: boolean = true;
  id: string;
  constructor(
    private memberService: MemberService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.member$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get("id");
        if (!!this.id) {
          this.title = "Edit";
          this.setAddMode(false);
          const member$ = this.memberService.get(this.id);
          return member$;
        }
        return new Observable<Member>();
      })
    );
    this.member$.subscribe(member => {
      this.member = member;
      this.memberForm.setValue(this.member);
    });
  }

  createForm() {
    this.memberForm = this.fb.group({
      name: ["", Validators.required],
      email: [""],
      phone: ["", Validators.required],
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
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
      this.memberForm.disable();
    } else {
      this.memberForm.enable();
    }
  }

  prepareSave(): Member {
    const formModel = this.memberForm.value;
    const saveMember: Member = {
      name: formModel.name as string,
      phone: formModel.phone as string,
      email: formModel.email as string,
      street: formModel.street as string,
      city: formModel.city as string,
      state: formModel.state as string,
      zip: formModel.zip as string
    };
    return saveMember;
  }

  onSubmit() {
    const member = this.prepareSave();
    if (this.editMode) {
      this.update(member);
    } else {
      this.add(member);
    }
    this.router.navigate(["/members"]);
  }

  add(member: Member) {
    this.memberService.add(member);
  }

  update(member: Member) {
    this.memberService.update(member, this.id);
  }
}
