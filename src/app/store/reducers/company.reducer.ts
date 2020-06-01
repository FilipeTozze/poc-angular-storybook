import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { CompanyActionTypes, CompanyActions } from "../actions/company.actions";
import { ResponseCampany } from "src/app/shared/models/responseHttp/responseCompany.model";

export interface CompanyState extends EntityState<ResponseCampany> {}

export const companyAdapter: EntityAdapter<ResponseCampany> = createEntityAdapter<ResponseCampany>();

export const INITIAL_STATE: CompanyState = companyAdapter.getInitialState({});

export function companyReducer(state = INITIAL_STATE, action: CompanyActions) {
  switch (action.type) {
    case CompanyActionTypes.COMPANY_ALL:
      return state;

    case CompanyActionTypes.COMPANY_NEW:
      return companyAdapter.addOne(action.playload.company, state);

    case CompanyActionTypes.COMPANY_UPDATE:
      return companyAdapter.updateOne(
        { id: action.playload.id, changes: action.playload.changes },
        state
      );

    case CompanyActionTypes.COMPANY_DELETE:
      return companyAdapter.removeOne(action.playload.id, state);

    default:
      return state;
  }
}
