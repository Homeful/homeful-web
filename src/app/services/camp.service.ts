import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Camp } from "../models/camp";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: "root"
})
export class CampService {
  collection = "camps";

  constructor(private db: AngularFireDatabase) {}

  getAll(): AngularFireList<Camp> {
    return this.db.list(`/${this.collection}`);
  }

  // get(id: string): Observable<Camp> {
  //   return this.db.doc<Camp>(`${this.collection}/${id}`).valueChanges();
  // }

  // add(camp: Camp) {
  //   this.db.collection<Camp>(`${this.collection}`).add(camp);
  // }

  // update(camp: Camp, id: string) {
  //   this.db.doc<Camp>(`${this.collection}/${id}`).update(camp);
  // }
}
