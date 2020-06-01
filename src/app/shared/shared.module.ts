import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialDesignModule } from "./material-design/material-design.module";
import { ToolbarCustomComponent } from "src/app/shared/components/toolbar-custom/toolbar-custom.component";
import { InputCustomComponent } from "src/app/shared/components/input-custom/input-custom.component";
import { AutoCompleteCustomComponent } from "./components/auto-complete-custom/auto-complete-custom.component";
import { CnpjPipe } from "./pipe/cnpj.pipe";
import { PersonComponent } from "./components/person/person.component";
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { NumberFormatPipe } from './pipe/number-format.pipe';

@NgModule({
  declarations: [
    ToolbarCustomComponent,
    InputCustomComponent,
    AutoCompleteCustomComponent,
    CnpjPipe,
    PersonComponent,
    CompanyInfoComponent,
    NumberFormatPipe,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarCustomComponent,
    InputCustomComponent,
    AutoCompleteCustomComponent,
    PersonComponent,
    CompanyInfoComponent
  ],
})
export class SharedModule {}
