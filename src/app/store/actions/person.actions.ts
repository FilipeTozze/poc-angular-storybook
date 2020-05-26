import { Action } from "@ngrx/store";
import { Person } from "src/app/shared/models/person.model";

export enum PersonActionTypes {
  PERSON_ALL = "[PERSON_ALL] Get all people",
  PERSON_NEW = "[PERSON_NEW] Add a new person",
  PERSON_UPDATE = "[PERSON_UPDATE] Update a person",
  PERSON_DELETE = "[PERSON_DELETE] Delete a person",
}

export class PersonAll implements Action {
  readonly type = PersonActionTypes.PERSON_ALL;
}

export class PersonNew implements Action {
  readonly type = PersonActionTypes.PERSON_NEW;
  constructor(public playload: { person: Person }) {}
}

export class PersonUpdate implements Action {
  readonly type = PersonActionTypes.PERSON_UPDATE;
  constructor(public playload: { id: string; changes: Partial<Person> }) {}
}

export class PersonDelete implements Action {
  readonly type = PersonActionTypes.PERSON_DELETE;
  constructor(public playload: { id: string }) {}
}

export type PersonActions = PersonAll | PersonNew | PersonUpdate | PersonDelete;
