import { Component, OnInit } from "@angular/core";
import { CampService } from "../../services/camp.service";
import { Observable } from "rxjs";
import { Camp } from "../../models/camp";
import { map } from "rxjs/operators";

@Component({
  selector: "app-camp-list",
  templateUrl: "./camp-list.component.html",
  styleUrls: ["./camp-list.component.scss"]
})
export class CampListComponent implements OnInit {
  camps$: Observable<Camp[]>;
  camps: Camp[];
  lat: number = 36.1627;
  lng: number = -86.7816;

  constructor(private campService: CampService) {}

  ngOnInit() {
    this.camps$ = this.campService
      .getAll()
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const camp = action.payload.val();
            camp.id = action.payload.key;
            console.log({ camp });
            return camp;
          });
        })
      );
    this.camps$.subscribe(camps => (this.camps = camps));
  }
}