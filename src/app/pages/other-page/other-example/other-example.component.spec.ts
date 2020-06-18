import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Store } from "@ngrx/store";

import { OtherExampleComponent } from "./other-example.component";
// import { CompanyInfoComponent } from "../../../shared/components/company-info/company-info.component";
import { SharedModule } from "../../../shared/shared.module";

import { of } from "rxjs";

export class StoreMockService {
  select() {
    return of([
      {
        id: new Date().getMilliseconds().toString(),
        dadosClienteCreditoPJ: {
          id: 1,
          nivelGrupo: "Subgrupo",
          nome: "Empresa Teste",
          tipoPessoa: "J",
          numeroDocumento: "95970738000198",
          segmento: "G",
        },
        valorLimite: {
          contratado: 5000000.0,
          disponibilidade: 2500000.0,
          proposto: 10000000.0,
        },
        dataVencimento: "22/12/2020",
        rating: "BAA",
        setor: "Varejo",
        temLimitePendente: false,
        listaParticipantes: [
          {
            dadosClienteCreditoPJ: {
              id: 2,
              nivelGrupo: "Participante",
              nome: "Empresa Teste SP",
              tipoPessoa: "J",
              numeroDocumento: "26055306000139",
              segmento: "G",
            },
            valorLimite: {
              contratado: 5000000.0,
              disponibilidade: 2500000.0,
              proposto: 10000000.0,
            },
            checkbox: false,
          },
          {
            dadosClienteCreditoPJ: {
              id: 3,
              nivelGrupo: "Participante",
              nome: "Empresa Teste RJ",
              tipoPessoa: "J",
              numeroDocumento: "58696577000160",
              segmento: "G",
            },
            valorLimite: {
              contratado: 5000000.0,
              disponibilidade: 2500000.0,
              proposto: 10000000.0,
            },
            checkbox: false,
          },
        ],
      },
    ]);
  }

  dispatch() {
    return void 0;
  }
}

fdescribe("OtherExampleComponent", () => {
  let component: OtherExampleComponent;
  let fixture: ComponentFixture<OtherExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherExampleComponent],
      providers: [
        {
          provide: Store,
          useClass: StoreMockService,
        },
      ],
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
