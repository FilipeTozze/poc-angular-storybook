import { moduleMetadata } from "@storybook/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialDesignModule } from "src/app/shared/material-design/material-design.module";
import { InputCustomComponent } from "src/app/shared/components/input-custom/input-custom.component";

const metadata = moduleMetadata({
  imports: [MaterialDesignModule, BrowserAnimationsModule],
  declarations: [InputCustomComponent],
});

export const inputCustom = () => ({
  component: InputCustomComponent,
});

inputCustom.story = {
  name: "Input default",
  parameters: {
    notes: "Note for component",
  },
};

export const inputCustomPropsValue = () => ({
  component: InputCustomComponent,
  props: {
    valueInput: "Other param",
  },
});

inputCustomPropsValue.story = {
  name: "Input with props",
  parameters: {
    notes: "",
  },
};

export default {
  title: "Input Custom",
  component: InputCustomComponent,
  decorators: [metadata],
};
