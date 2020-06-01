import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { CompanyNew, CompanyAll, CompanyUpdate, CompanyDelete } from "src/app/store/actions/company.actions";
import {selectAll as selectAllCompany, selectTotal as selectTotalCompany } from "src/app/store/selectors/company.selector";
import { ResponseCampany } from 'src/app/shared/models/responseHttp/responseCompany.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-other-example',
  templateUrl: './other-example.component.html',
  styleUrls: ['./other-example.component.scss']
})
export class OtherExampleComponent implements OnInit {
  companies$: Observable<ResponseCampany[]>;
  dataObject: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new CompanyAll());
    this.companies$ = this.store.select(selectAllCompany);
    this.companies$.subscribe(r => {
      this.dataObject = r[0];
    })
  }

}
