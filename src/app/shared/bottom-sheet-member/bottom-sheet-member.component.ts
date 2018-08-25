import { Component, OnInit, Inject } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatSnackBar
} from "../../../../node_modules/@angular/material";
import {
  faCopy,
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { Member } from "../../models/member";

@Component({
  selector: "app-bottom-sheet-member",
  templateUrl: "./bottom-sheet-member.component.html",
  styleUrls: ["./bottom-sheet-member.component.scss"]
})
export class BottomSheetMemberComponent implements OnInit {
  faCopy = faCopy;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  call: string = "";
  address: string = "";
  member: Member;
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetMemberComponent>,
    public snackBar: MatSnackBar,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  ngOnInit() {
    this.member = this.data.member;
    this.call = `tel:${this.member.phone}`;
    this.address = `${this.member.street} ${this.member.city}, ${
      this.member.state
    } ${this.member.zip}`;
  }

  email(event: MouseEvent) {
    event.preventDefault();
    this.bottomSheetRef.dismiss();
    if (!!this.member.email) {
      window.location.href = `mailto:${this.member.email}`;
    } else {
      this.snackBar.open("No Email Exists!", "Okay", { duration: 1000 });
    }
  }

  copyPhone(event: MouseEvent) {
    event.preventDefault();
    this.bottomSheetRef.dismiss();
    this.snackBar.open("Phone Number Copied!", "Okay", { duration: 1000 });
  }

  copyAddress(event: MouseEvent): void {
    event.preventDefault();
    this.bottomSheetRef.dismiss();
    if (this.address.length > 0) {
      this.snackBar.open("Address Copied!", "Okay", { duration: 1000 });
    } else {
      this.snackBar.open("No Address Exists!", "Okay", { duration: 1000 });
    }
  }

  // openInMaps(event: MouseEvent): void {
  //   this.bottomSheetRef.dismiss();
  //   event.preventDefault();
  //   if (
  //     /* if we're on iOS, open in Apple Maps */
  //     navigator.platform.indexOf("iPhone") != -1 ||
  //     navigator.platform.indexOf("iPad") != -1 ||
  //     navigator.platform.indexOf("iPod") != -1
  //   )
  //     window.open(`maps://maps.google.com/maps?daddr=${this.val}&amp;ll=`);
  //   /* else use Google */ else
  //     window.open(`https://maps.google.com/maps?daddr=${this.val}&amp;ll=`);
  // }
}
