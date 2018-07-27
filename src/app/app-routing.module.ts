import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CampModule } from "./camp/camp.module";

const routes: Routes = [
  {
    path: "camps",
    loadChildren: "../app/camp/camp.module#CampModule"
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CampModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
