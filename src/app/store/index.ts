import { Person } from "../shared/models/person.model";
import { ActionReducerMap } from "@ngrx/store";

import { personReducer } from "./reducers/person.reducer";

export interface AppState {
  people: Person[];
  //otherStore: OtherStore[]; Examples of others stores
}

export const appReducers: ActionReducerMap<AppState> = {
  people: personReducer,
};
