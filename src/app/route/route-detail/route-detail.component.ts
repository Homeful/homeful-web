import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Route, Stop } from "../../models/route";
import { Observable } from "rxjs";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { MatDialog, MatBottomSheet } from "@angular/material";
import { RouteService } from "../../services/route.service";
import { switchMap } from "rxjs/operators";
import { Member } from "../../models/member";
import { GeoService } from "../../services/geo.service";
import { CreateMemberComponent } from "../../shared/create-member/create-member.component";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { CampService } from "src/app/services/camp.service";
import { Camp } from "src/app/models/camp";
import { BottomSheetNavigateComponent } from "src/app/shared/bottom-sheet-navigate/bottom-sheet-navigate.component";

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss']
})
export class RouteDetailComponent implements OnInit {
  routeForm: FormGroup;
  route: Route = new Route();
  route$: Observable<Route>;
  camps$: Observable<Camp[]>;
  selectedCamps: Camp[];
  routeCamps: Camp[];
  title = "Add";
  editMode = false;
  addMode = true;
  id: string;
  lat: number = 36.1627;
  lng: number = -86.7816;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private routeService: RouteService,
    private campService: CampService,
    private bottomSheet: MatBottomSheet
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.camps$ = this.campService.getAll();
    this.route$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get("id");
        if (!!this.id) {
          this.title = "Edit";
          this.setAddMode(false);
          const route$ = this.routeService.get(this.id);
          // TODO: if model doesn't match send error
          return route$;
        }
        return new Observable<Route>();
      })
    );
    this.route$.subscribe(route => {
      this.route = route;
      if (!this.route.stops) this.route.stops = [];
      this.routeCamps = this.route.stops.map(s => s.camp);
      this.route.active = true;
      this.routeForm.setValue(this.route);
      this.selectedCamps = this.routeCamps;
    });
  }

  compareWithFunc(a, b) {
    return a.id === b.id;
  }

  createForm() {
    this.routeForm = this.fb.group({
      name: ["", Validators.required],
      stops: [[]],
      active: [true],
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
      this.routeForm.disable();
    } else {
      this.routeForm.enable();
    }
  }

  prepareSave(): Route {
    return this.createRoute(this.selectedCamps);
  }

  createStops(camps: Camp[]): Stop[] {
    return camps.map(c => {
      return { camp: c, complete: false, inProgress: false };
    });
  }

  createRoute(camps: Camp[]): Route {
    const stops = this.createStops(camps);
    const formModel = this.routeForm.value;
    const saveRoute: Route = {
      name: formModel.name as string,
      stops: stops,
      createdAt: new Date(),
      modifiedAt: new Date(),
      active: formModel.active
    };
    return saveRoute;
  }

  isSelected(campId: string): boolean {
    return this.selectedCamps.map(c => c.id).includes(campId);
  }

  onSubmit() {
    const route = this.prepareSave();
    if (this.editMode) {
      this.update(route);
    } else {
      this.add(route);
    }
    this.router.navigate(["/routes"]);
  }

  add(route: Route) {
    this.routeService.add(route);
  }

  update(route: Route) {
    this.routeService.update(route, this.id);
  }

  openBottomSheet(event: MouseEvent, camp: Camp): void {
    event.preventDefault();
    event.stopPropagation();
    this.bottomSheet.open(BottomSheetNavigateComponent, {
      data: { camp: camp }
    });
  }

}
