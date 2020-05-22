import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, debounceTime } from "rxjs/operators";
import { BaseResourceService } from "../../services/base-resource.service";

@Component({
  selector: "app-auto-complete-custom",
  templateUrl: "./auto-complete-custom.component.html",
  styleUrls: ["./auto-complete-custom.component.scss"],
})
export class AutoCompleteCustomComponent implements OnInit {
  constructor(private _baseResource: BaseResourceService) {}

  formControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.formControl.valueChanges.pipe(
      debounceTime(1000),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    return this._baseResource.getCompany(value);
  }
}
