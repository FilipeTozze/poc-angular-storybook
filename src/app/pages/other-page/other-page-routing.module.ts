import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherExampleComponent } from "src/app/pages/other-page/other-example/other-example.component";

const routes: Routes = [
  {
    path: '',
    component: OtherExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPageRoutingModule { }
