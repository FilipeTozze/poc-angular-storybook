import { Action } from "@ngrx/store";
import { ResponseCampany } from "src/app/shared/models/responseHttp/responseCompany.model";

export enum CompanyActionTypes {
  COMPANY_ALL = "[COMPANY_ALL] Get all company",
  COMPANY_NEW = "[COMPANY_NEW] Add a new company",
  COMPANY_UPDATE = "[COMPANY_UPDATE] Update a company",
  COMPANY_DELETE = "[COMPANY_DELETE] Delete a company",
}

export class CompanyAll implements Action {
  readonly type = CompanyActionTypes.COMPANY_ALL;
}

export class CompanyNew implements Action {
  readonly type = CompanyActionTypes.COMPANY_NEW;
  constructor(public playload: { company: ResponseCampany }) {}
}

export class CompanyUpdate implements Action {
  readonly type = CompanyActionTypes.COMPANY_UPDATE;
  constructor(public playload: { id: string; changes: Partial<ResponseCampany> }) {}
}

export class CompanyDelete implements Action {
  readonly type = CompanyActionTypes.COMPANY_DELETE;
  constructor(public playload: { id: string }) {}
}

export type CompanyActions = CompanyAll | CompanyNew | CompanyUpdate | CompanyDelete;
