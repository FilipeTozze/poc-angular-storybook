import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BaseResourceService {
  constructor() {}

  getCompany(param: string): any {
    const companies = [
      {
        name: "Company One",
        cnpj: "01979560000100",
      },
      {
        name: "Company Two",
        cnpj: "88211925000122",
      },
      {
        name: "Company Three",
        cnpj: "79573055000140",
      },
      {
        name: "Company Four",
        cnpj: "61162781000105",
      },
      {
        name: "Company Five",
        cnpj: "64897189000140",
      },
      {
        name: "Company Six",
        cnpj: "89842186000130",
      },
      {
        name: "Company Seven",
        cnpj: "75373215000157",
      },
    ];

    return companies.filter((option) => {
      if (option.cnpj.includes(param)) {
        return option;
      }
    });
  }
}
