import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "../models/member";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: "root"
})
export class MemberService {
  collection = "members";

  constructor(private db: AngularFireDatabase) {}

  getAll(): AngularFireList<Member> {
    return this.db.list(`/${this.collection}`);
  }

  get(id: string): Observable<Member> {
    return this.db.object<Member>(`${this.collection}/${id}`).valueChanges();
  }

  add(member: Member) {
    this.db.list<Member>(`${this.collection}`).push(member);
  }

  update(member: Member, id: string) {
    this.db.object<Member>(`${this.collection}/${id}`).update(member);
  }
}
