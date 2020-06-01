import { createFeatureSelector } from "@ngrx/store";
import { CompanyState, companyAdapter } from "../reducers/company.reducer";

export const peopleStateSelector = createFeatureSelector<CompanyState>("company");

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = companyAdapter.getSelectors(peopleStateSelector);
