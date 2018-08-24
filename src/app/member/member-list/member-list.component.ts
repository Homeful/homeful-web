import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "../../models/member";
import { MemberService } from "../../services/member.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"]
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;
  membersFound: boolean = false;
  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.members$ = this.memberService
      .getAll()
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const member = action.payload.val();
            member.id = action.payload.key;
            return member;
          });
        })
      );
    this.members$.subscribe(members => {
      console.log(members);
      this.membersFound = true;
    });
  }
}
