import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import { Observable } from 'rxjs';
import { Route } from 'src/app/models/route';
import { BottomSheetRouteComponent } from 'src/app/shared/bottom-sheet-route/bottom-sheet-route.component';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  routes$: Observable<Route[]>;
  constructor(
    private routeService: RouteService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.routes$ = this.routeService.getAll();
  }

  openBottomSheet(event: MouseEvent, route: Route): void {
    event.preventDefault();
    event.stopPropagation();
    this.bottomSheet.open(BottomSheetRouteComponent, {
      data: { route: route }
    });
  }

}
