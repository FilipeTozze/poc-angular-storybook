import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "src/app/shared/models/person.model";

import * as faker from "faker";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/store";
import {
  PersonNew,
  PersonAll,
  PersonUpdate,
  PersonDelete,
} from "src/app/store/actions/person.actions";
import {
  selectPeople,
  selectPeopleCount,
} from "src/app/store/selectors/person.selector";

@Component({
  selector: "app-general-elements",
  templateUrl: "./general-elements.component.html",
  styleUrls: ["./general-elements.component.scss"],
})
export class GeneralElementsComponent implements OnInit {
  people$: Observable<Person[]>;
  totalPerson: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new PersonAll());
    this.people$ = this.store.select(selectPeople);
    this.store
      .select(selectPeopleCount)
      .subscribe((n) => (this.totalPerson = n));
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

    this.store.dispatch(new PersonUpdate({ person }));
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({ id: p._id }));
  }
}
