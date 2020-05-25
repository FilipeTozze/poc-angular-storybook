import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";

const materialModules = [
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBottomSheetModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialModules],
  exports: [materialModules],
})
export class MaterialDesignModule {}
