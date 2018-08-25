import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Member } from "../../models/member";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-create-member",
  templateUrl: "./create-member.component.html",
  styleUrls: ["./create-member.component.scss"]
})
export class CreateMemberComponent implements OnInit {
  member: Member = new Member();
  constructor(private dialogRef: MatDialogRef<CreateMemberComponent>) {}

  ngOnInit() {}

  onSave() {
    console.log(this.member);
    this.dialogRef.close(this.member);
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
