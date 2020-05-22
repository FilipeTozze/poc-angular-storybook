import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialDesignModule } from "./material-design/material-design.module";
import { ToolbarCustomComponent } from "src/app/shared/components/toolbar-custom/toolbar-custom.component";
import { InputCustomComponent } from "src/app/shared/components/input-custom/input-custom.component";
import { AutoCompleteCustomComponent } from "./components/auto-complete-custom/auto-complete-custom.component";
import { CnpjPipe } from './pipe/cnpj.pipe';

@NgModule({
  declarations: [
    ToolbarCustomComponent,
    InputCustomComponent,
    AutoCompleteCustomComponent,
    CnpjPipe,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarCustomComponent,
    InputCustomComponent,
    AutoCompleteCustomComponent,
  ],
})
export class SharedModule {}
