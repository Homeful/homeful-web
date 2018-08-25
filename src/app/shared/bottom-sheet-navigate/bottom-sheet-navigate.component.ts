import { Component, OnInit, Inject } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatSnackBar
} from "../../../../node_modules/@angular/material";
import { faCopy, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-bottom-sheet-navigate",
  templateUrl: "./bottom-sheet-navigate.component.html",
  styleUrls: ["./bottom-sheet-navigate.component.scss"]
})
export class BottomSheetNavigateComponent implements OnInit {
  faCopy = faCopy;
  faMapMarkerAlt = faMapMarkerAlt;
  val = `${this.data.camp.location.lat},${this.data.camp.location.lng}`;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetNavigateComponent>,
    public snackBar: MatSnackBar,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  ngOnInit() {}

  copyAddress(event: MouseEvent): void {
    event.preventDefault();
    this.bottomSheetRef.dismiss();
    this.snackBar.open("Address Copied!", "Okay", { duration: 1000 });
  }

  openInMaps(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    )
      window.open(`maps://maps.google.com/maps?daddr=${this.val}&amp;ll=`);
    /* else use Google */ else
      window.open(`https://maps.google.com/maps?daddr=${this.val}&amp;ll=`);
  }
}
