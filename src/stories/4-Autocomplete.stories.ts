import { moduleMetadata } from "@storybook/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialDesignModule } from "src/app/shared/material-design/material-design.module";
import { BaseResourceService } from "src/app/shared/services/base-resource.service";
import { CnpjPipe } from "src/app/shared/pipe/cnpj.pipe";
import { AutoCompleteCustomComponent } from "src/app/shared/components/auto-complete-custom/auto-complete-custom.component";

const metadata = moduleMetadata({
  imports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [BaseResourceService],
  declarations: [AutoCompleteCustomComponent, CnpjPipe],
});

export const autoCompleteCustom = () => ({
  component: AutoCompleteCustomComponent,
});

autoCompleteCustom.story = {
  name: "AutoComplete",
  parameters: {
    notes: "After 1 second after typing, it will do the search",
  },
};

export default {
  title: "AutoComplete",
  component: AutoCompleteCustomComponent,
  decorators: [metadata],
};
