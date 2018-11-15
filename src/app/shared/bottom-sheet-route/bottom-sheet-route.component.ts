import { Component, OnInit, Inject } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatSnackBar
} from "../../../../node_modules/@angular/material";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-bottom-sheet-route',
  templateUrl: './bottom-sheet-route.component.html',
  styleUrls: ['./bottom-sheet-route.component.scss']
})
export class BottomSheetRouteComponent implements OnInit {

  faCopy = faCopy;
  link = `${environment.url}/routes/edit/${this.data.route.id}`;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetRouteComponent>,
    public snackBar: MatSnackBar,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit() { }

  copyLink(event: MouseEvent): void {
    event.preventDefault();
    this.bottomSheetRef.dismiss();
    this.snackBar.open("Route Link Copied!", "Okay", { duration: 1000 });
  }
}
