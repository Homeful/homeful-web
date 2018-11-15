import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Route } from "../models/route";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RouteService {
  collection = "routes";

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<Route[]> {
    return this.db
      .list(`/${this.collection}`, ref => ref.orderByChild("name"))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const route = action.payload.val() as Route;
            route.id = action.payload.key;
            return route;
          });
        })
      );
  }

  get(id: string): Observable<Route> {
    return this.db.object<Route>(`${this.collection}/${id}`).valueChanges();
  }

  add(route: Route) {
    this.db.list<Route>(`${this.collection}`).push(route);
  }

  update(route: Route, id: string) {
    this.db.object<Route>(`${this.collection}/${id}`).update(route);
  }
}
