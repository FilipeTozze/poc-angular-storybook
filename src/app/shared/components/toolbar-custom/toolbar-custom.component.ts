import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-toolbar-custom",
  templateUrl: "./toolbar-custom.component.html",
  styleUrls: ["./toolbar-custom.component.scss"],
})
export class ToolbarCustomComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
