import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-custom",
  templateUrl: "./input-custom.component.html",
  styleUrls: ["./input-custom.component.scss"],
})
export class InputCustomComponent implements OnInit {
  @Input() valueInput: string | number = "";

  constructor() {}

  ngOnInit() {}
}
