import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MemberListComponent } from "./member-list/member-list.component";
import { MemberDetailComponent } from "./member-detail/member-detail.component";

const routes: Routes = [
  {
    path: "",
    component: MemberListComponent
  },
  {
    path: "add",
    component: MemberDetailComponent
  },
  {
    path: "edit/:id",
    component: MemberDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
