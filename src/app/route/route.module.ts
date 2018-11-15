import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { StopsPipe } from '../pipes/stops.pipe';
import { BottomSheetRouteComponent } from '../shared/bottom-sheet-route/bottom-sheet-route.component';

@NgModule({
  imports: [
    CommonModule,
    RouteRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [RouteListComponent, RouteDetailComponent, StopsPipe]
})
export class RouteModule { }
