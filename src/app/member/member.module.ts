import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MemberRoutingModule } from "./member-routing.module";
import { MemberDetailComponent } from "./member-detail/member-detail.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [MemberDetailComponent, MemberListComponent]
})
export class MemberModule {}
