import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../../environments/environment";
import { AgmCoreModule } from "@agm/core";
import { MaterialModule } from "../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBuKQXq3VhtYwOUdRSabC_tlln2nj2-f_8"
    }),
    MaterialModule
  ],
  declarations: [],
  exports: [AgmCoreModule, MaterialModule]
})
export class SharedModule {}
