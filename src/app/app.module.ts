import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NavmenuComponent],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
