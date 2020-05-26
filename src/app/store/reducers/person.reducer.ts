import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { PersonActionTypes, PersonActions } from "../actions/person.actions";
import { Person } from "src/app/shared/models/person.model";

export interface PeopleState extends EntityState<Person> {}

export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>(
  {
    selectId: (p: Person) => p._id,
  }
);

export const INITIAL_STATE: PeopleState = peopleAdapter.getInitialState({});

export function personReducer(state = INITIAL_STATE, action: PersonActions) {
  switch (action.type) {
    case PersonActionTypes.PERSON_ALL:
      return state;

    case PersonActionTypes.PERSON_NEW:
      return peopleAdapter.addOne(action.playload.person, state);

    case PersonActionTypes.PERSON_UPDATE:
      return peopleAdapter.updateOne(
        { id: action.playload.id, changes: action.playload.changes },
        state
      );

    case PersonActionTypes.PERSON_DELETE:
      return peopleAdapter.removeOne(action.playload.id, state);

    default:
      return state;
  }
}
