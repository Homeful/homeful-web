import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Camp } from "../models/camp";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CampService {
  collection = "camps";

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<Camp[]> {
    return this.db
      .list(`/${this.collection}`, ref => ref.orderByChild("name"))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const camp = action.payload.val() as Camp;
            camp.id = action.payload.key;
            if (!camp.location) camp.location = { lat: 0, lng: 0 };
            return camp;
          });
        })
      );
  }

  get(id: string): Observable<Camp> {
    return this.db.object<Camp>(`${this.collection}/${id}`).valueChanges();
  }

  add(camp: Camp) {
    this.db.list<Camp>(`${this.collection}`).push(camp);
  }

  update(camp: Camp, id: string) {
    this.db.object<Camp>(`${this.collection}/${id}`).update(camp);
  }
}
