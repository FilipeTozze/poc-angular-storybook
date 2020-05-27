import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPageRoutingModule } from './other-page-routing.module';
import { OtherExampleComponent } from './other-example/other-example.component';


@NgModule({
  declarations: [OtherExampleComponent],
  imports: [
    CommonModule,
    OtherPageRoutingModule
  ]
})
export class OtherPageModule { }
