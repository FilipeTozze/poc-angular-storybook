import { ActionReducerMap } from "@ngrx/store";

import { personReducer, PeopleState } from "./reducers/person.reducer";

export interface AppState {
  people: PeopleState;
  //otherStore: OtherStore[]; Examples of others stores
}

export const appReducers: ActionReducerMap<AppState> = {
  people: personReducer,
};
