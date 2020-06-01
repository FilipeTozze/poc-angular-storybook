import { ActionReducerMap } from "@ngrx/store";

import { personReducer, PeopleState } from "./reducers/person.reducer";
import { companyReducer, CompanyState } from "./reducers/company.reducer";

export interface AppState {
  people: PeopleState;
  company:CompanyState;
}

export const appReducers: ActionReducerMap<AppState> = {
  people: personReducer,
  company: companyReducer
};
