import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CampRoutingModule } from "./camp-routing.module";
import { SharedModule } from "../shared/shared.module";
import { CampDetailComponent } from "./camp-detail/camp-detail.component";
import { CampListComponent } from "./camp-list/camp-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MembersPipe } from "../pipes/members.pipe";

@NgModule({
  imports: [
    CommonModule,
    CampRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CampDetailComponent, CampListComponent, MembersPipe]
})
export class CampModule {}
