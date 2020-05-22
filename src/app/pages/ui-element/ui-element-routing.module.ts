import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GeneralElementsComponent } from "src/app/pages/ui-element/general-elements/general-elements.component";

const routes: Routes = [
  {
    path: "",
    component: GeneralElementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiElementRoutingModule {}
