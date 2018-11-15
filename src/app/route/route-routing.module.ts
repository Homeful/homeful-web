import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';

const routes: Routes = [
  {
    path: "",
    component: RouteListComponent
  },
  {
    path: "add",
    component: RouteDetailComponent
  },
  {
    path: "edit/:id",
    component: RouteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
