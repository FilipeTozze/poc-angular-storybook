import { createFeatureSelector } from "@ngrx/store";
import { PeopleState, peopleAdapter } from "../reducers/person.reducer";

export const peopleStateSelector = createFeatureSelector<PeopleState>("people");

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = peopleAdapter.getSelectors(peopleStateSelector);
