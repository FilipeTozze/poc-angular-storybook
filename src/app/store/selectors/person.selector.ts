import { AppState } from "..";
import { createSelector } from "@ngrx/store";

export const selectPeople = (state: AppState) => state.people;

export const selectPeopleCount = createSelector(
  selectPeople,
  (people) => people.length
);
