import { Component } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "navmenu",
  templateUrl: "./navmenu.component.html",
  styleUrls: ["./navmenu.component.css"]
})
export class NavmenuComponent {
  isHandset: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        this.isHandset = result.matches;
        return result.matches;
      })
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  closeNav(drawer: any) {
    if (this.isHandset) drawer.toggle();
  }
}
