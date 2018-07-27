import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CampListComponent } from "./camp-list/camp-list.component";
import { CampDetailComponent } from "./camp-detail/camp-detail.component";

const routes: Routes = [
  {
    path: "",
    component: CampListComponent
  },
  {
    path: "add",
    component: CampDetailComponent
  },
  {
    path: "edit/:id",
    component: CampDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampRoutingModule {}
