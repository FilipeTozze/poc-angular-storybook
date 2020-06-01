import { ClientCreditPj } from '../client-credit-pj.model';
import { ValueLimit } from '../value-limit.model';
import { ParticipantList } from '../participan-list.model';

export class ResponseCampany {
    id:string;
    dadosClienteCreditoPJ:ClientCreditPj;
    valorLimite:ValueLimit;
    dataVencimento:string;
    rating:string;
    setor:string;
    temLimitePendente:boolean;
    listaParticipantes: Array<ParticipantList>
  }
  