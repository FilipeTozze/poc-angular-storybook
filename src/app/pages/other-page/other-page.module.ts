import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPageRoutingModule } from './other-page-routing.module';
import { OtherExampleComponent } from './other-example/other-example.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [OtherExampleComponent],
  imports: [
    CommonModule,
    OtherPageRoutingModule,
    SharedModule
  ]
})
export class OtherPageModule { }
