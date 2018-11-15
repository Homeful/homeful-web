import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "../models/member";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MemberService {
  collection = "members";

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<Member[]> {
    return this.db
      .list(`/${this.collection}`, ref => ref.orderByChild("name"))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const member = action.payload.val() as Member;
            member.id = action.payload.key;
            return member;
          });
        })
      );
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
