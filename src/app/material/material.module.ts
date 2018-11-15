import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule,
  MatTabsModule,
  MatBottomSheetModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
