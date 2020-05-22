import { storiesOf, moduleMetadata } from "@storybook/angular";

import { MaterialDesignModule } from "src/app/shared/material-design/material-design.module";

import { ToolbarCustomComponent } from "src/app/shared/components/toolbar-custom/toolbar-custom.component";

/**
 * Example of way to write stories before Storybook 5.2. Works, but not recommended
 */
const metadata = moduleMetadata({
  imports: [MaterialDesignModule],
  declarations: [ToolbarCustomComponent],
  providers: [
    // services
  ],
});

storiesOf("Toolbar Custom", module)
  .addDecorator(metadata)
  .add("default", () => ({
    template: `
    <app-toolbar-custom [title]="title"></app-toolbar-custom>
    `,
    props: {
      title: "Test Title Storybook",
    },
  }));
