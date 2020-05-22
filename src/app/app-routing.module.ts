import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UiElementModule } from "src/app/pages/ui-element/ui-element.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "ui-element",
    pathMatch: "full",
  },
  {
    path: "ui-element",
    loadChildren: () => UiElementModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
