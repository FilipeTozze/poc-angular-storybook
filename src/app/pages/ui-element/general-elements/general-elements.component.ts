import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "src/app/shared/models/person.model";

import * as faker from "faker";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import {PersonNew, PersonAll, PersonUpdate, PersonDelete } from "src/app/store/actions/person.actions";
import {selectAll, selectTotal } from "src/app/store/selectors/person.selector";

import { CompanyNew, CompanyAll, CompanyUpdate, CompanyDelete } from "src/app/store/actions/company.actions";
import {selectAll as selectAllCompany, selectTotal as selectTotalCompany } from "src/app/store/selectors/company.selector";
import { ResponseCampany } from 'src/app/shared/models/responseHttp/responseCompany.model';

@Component({
  selector: "app-general-elements",
  templateUrl: "./general-elements.component.html",
  styleUrls: ["./general-elements.component.scss"],
})
export class GeneralElementsComponent implements OnInit {
  people$: Observable<Person[]>;
  companie$: Observable<ResponseCampany[]>;
  totalPerson: number = 0;
  
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new PersonAll());
    this.people$ = this.store.select(selectAll);
    this.store.select(selectTotal).subscribe((n) => (this.totalPerson = n));

    
    this.addNewRequestResponse()
  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString(),
    };

    this.store.dispatch(new PersonNew({ person }));
  }

  update(p: Person) {
    let person = Object.assign({}, p);
    person.name = faker.name.findName();
    person.address = faker.address.streetAddress();
    person.city = faker.address.city();
    person.country = faker.address.country();
    person.age = Math.round(Math.random() * 100);

    this.store.dispatch(new PersonUpdate({ id: person._id, changes: person }));
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({ id: p._id }));
  }

  addNewRequestResponse() {
    let company: ResponseCampany = 
      {
        "id": new Date().getMilliseconds().toString(),
        "dadosClienteCreditoPJ": {
            "id": 1,
            "nivelGrupo": "Subgrupo",
            "nome": "Empresa Teste",
            "tipoPessoa": "J",
            "numeroDocumento": "95970738000198",
            "segmento": "G"
        },
        "valorLimite": {
            "contratado": 5000000.00,
            "disponibilidade": 2500000.00,
            "proposto": 10000000.00
        },
        "dataVencimento": "22/12/2020",
        "rating": "BAA",
        "setor": "Varejo",
        "temLimitePendente": false,
        "listaParticipantes": [
            {
                "dadosClienteCreditoPJ": {
                    "id": 2,
                    "nivelGrupo": "Participante",
                    "nome": "Empresa Teste SP",
                    "tipoPessoa": "J",
                    "numeroDocumento": "26055306000139",
                    "segmento": "G"
                },
                "valorLimite": {
                    "contratado": 5000000.00,
                    "disponibilidade": 2500000.00,
                    "proposto": 10000000.00
                },
                "checkbox": false
            },
            {
                "dadosClienteCreditoPJ": {
                    "id": 3,
                    "nivelGrupo": "Participante",
                    "nome": "Empresa Teste RJ",
                    "tipoPessoa": "J",
                    "numeroDocumento": "58696577000160",
                    "segmento": "G"
                },
                "valorLimite": {
                    "contratado": 5000000.00,
                    "disponibilidade": 2500000.00,
                    "proposto": 10000000.00
                },
                "checkbox": false
            }
        ]
    };
    
    this.store.dispatch(new CompanyNew({ company }));

  }
}
