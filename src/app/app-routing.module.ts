import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "camps",
    loadChildren: "./camp/camp.module#CampModule"
  },
  {
    path: "members",
    loadChildren: "./member/member.module#MemberModule"
  },
  {
    path: "routes",
    loadChildren: "./route/route.module#RouteModule"
  },
  {
    path: "",
    redirectTo: "camps",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
