import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiElementRoutingModule } from "./ui-element-routing.module";
import { GeneralElementsComponent } from "./general-elements/general-elements.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [GeneralElementsComponent],
  imports: [CommonModule, SharedModule, UiElementRoutingModule],
})
export class UiElementModule {}
