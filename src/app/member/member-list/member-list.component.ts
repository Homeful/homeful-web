import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "../../models/member";
import { MemberService } from "../../services/member.service";
import { map } from "rxjs/operators";
import { BottomSheetMemberComponent } from "../../shared/bottom-sheet-member/bottom-sheet-member.component";
import { MatBottomSheet } from "@angular/material";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"]
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;
  membersFound: boolean = false;
  constructor(
    private memberService: MemberService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.members$ = this.memberService.getAll();
    this.members$.subscribe(members => {
      this.membersFound = true;
    });
  }

  openBottomSheet(event: MouseEvent, member: Member): void {
    event.preventDefault();
    event.stopPropagation();
    this.bottomSheet.open(BottomSheetMemberComponent, {
      data: { member: member }
    });
  }
}
