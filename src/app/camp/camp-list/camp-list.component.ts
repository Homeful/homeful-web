import { Component, OnInit } from "@angular/core";
import { CampService } from "../../services/camp.service";
import { Observable } from "rxjs";
import { Camp } from "../../models/camp";
import { map } from "rxjs/operators";
import { MatBottomSheet } from "../../../../node_modules/@angular/material";
import { BottomSheetNavigateComponent } from "../../shared/bottom-sheet-navigate/bottom-sheet-navigate.component";

@Component({
  selector: "app-camp-list",
  templateUrl: "./camp-list.component.html",
  styleUrls: ["./camp-list.component.scss"]
})
export class CampListComponent implements OnInit {
  camps$: Observable<Camp[]>;
  lat: number = 36.1627;
  lng: number = -86.7816;

  constructor(
    private campService: CampService,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.camps$ = this.campService.getAll();
  }

  openBottomSheet(event: MouseEvent, camp: Camp): void {
    event.preventDefault();
    event.stopPropagation();
    this.bottomSheet.open(BottomSheetNavigateComponent, {
      data: { camp: camp }
    });
  }
}
