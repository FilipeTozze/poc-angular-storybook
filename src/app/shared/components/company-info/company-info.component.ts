import { Component, OnInit, Input } from '@angular/core';
import { ResponseCampany } from '../../models/responseHttp/responseCompany.model';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  @Input() dataObj: ResponseCampany;

  constructor() { }

  ngOnInit() {
  }

}
