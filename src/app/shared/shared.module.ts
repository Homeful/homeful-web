import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../../environments/environment";
import { AgmCoreModule } from "@agm/core";
import { MaterialModule } from "../material/material.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BottomSheetNavigateComponent } from "./bottom-sheet-navigate/bottom-sheet-navigate.component";
import { ClipboardModule } from "ngx-clipboard";
import { CreateMemberComponent } from "./create-member/create-member.component";
import { FormsModule } from "@angular/forms";
import { BottomSheetMemberComponent } from "./bottom-sheet-member/bottom-sheet-member.component";
import { BottomSheetRouteComponent } from './bottom-sheet-route/bottom-sheet-route.component';
import { MembersPipe } from "../pipes/members.pipe";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBuKQXq3VhtYwOUdRSabC_tlln2nj2-f_8"
    }),
    MaterialModule,
    FontAwesomeModule,
    ClipboardModule,
    FormsModule
  ],
  providers: [MembersPipe],
  declarations: [
    BottomSheetNavigateComponent,
    CreateMemberComponent,
    BottomSheetMemberComponent,
    BottomSheetRouteComponent,
    MembersPipe
  ],
  exports: [AgmCoreModule, MaterialModule, FontAwesomeModule, ClipboardModule, MembersPipe],
  entryComponents: [
    BottomSheetNavigateComponent,
    CreateMemberComponent,
    BottomSheetMemberComponent,
    BottomSheetRouteComponent
  ]
})
export class SharedModule { }
