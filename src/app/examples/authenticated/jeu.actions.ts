import { Action } from '@ngrx/store';
import { Form } from './form.model';
import { Jeu, Carte } from './jeu.model';

export enum JeuActionTypes {
  UPSERT_ONE = '[jeu] Upsert_one',
  UPSERT_ONE_CARTE = '[jeu] Upsert_one_carte',
  UPDATE = '[jeu] Update',
  RESET = '[jeu] Reset',
  DELETE_ONE = '[jeu] Delete_one_carte'
}

export class ActionJeuUpsertOneCarte implements Action {
  readonly type = JeuActionTypes.UPSERT_ONE_CARTE;
  constructor(readonly payload: { carte: Carte }) {}
}


export class ActionJeuUpsertOne implements Action {
  readonly type = JeuActionTypes.UPSERT_ONE;
  constructor(readonly payload: { jeu: Jeu }) {}
}

export class ActionJeuDeleteOne implements Action {
  readonly type = JeuActionTypes.DELETE_ONE;
  constructor(readonly payload: {id:string}) {}
}

export class ActionJeuUpdate implements Action {
  readonly type = JeuActionTypes.UPDATE;
  constructor(readonly payload: { jeu: Jeu }) {}
}

export class ActionJeuReset implements Action {
  readonly type = JeuActionTypes.RESET;
}

export type JeuActions = ActionJeuUpdate | ActionJeuReset | ActionJeuUpsertOne | ActionJeuUpsertOneCarte | ActionJeuDeleteOne;
