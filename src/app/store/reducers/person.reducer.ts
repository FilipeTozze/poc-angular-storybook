import { PersonActionTypes, PersonActions } from "../actions/person.actions";
import { Person } from "src/app/shared/models/person.model";

export const INITIAL_STATE: Person[] = [];

export function personReducer(state = INITIAL_STATE, action: PersonActions) {
  switch (action.type) {
    case PersonActionTypes.PERSON_ALL:
      return state;
    case PersonActionTypes.PERSON_NEW:
      return state.concat([action.playload.person]);
    case PersonActionTypes.PERSON_UPDATE:
      let people = state.slice();
      let peopleFilter = people.findIndex(
        (p) => p._id == action.playload.person._id
      );
      if (peopleFilter >= 0) {
        people[peopleFilter] = action.playload.person;
      }
      return people;
    case PersonActionTypes.PERSON_DELETE:
      return state.filter((p) => p._id != action.playload.id);
    default:
      return state;
  }
}
