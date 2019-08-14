import { Action } from '@ngrx/store';
import { Logo, Vote } from './books.model';

export enum BookActionTypes {
  UPSERT_ONE = '[Books] Upsert One',
  UPSERT_ALL = '[Books] Upsert All',
  DELETE_ONE = '[Books] Delete One',
  CHANGE_NIVEAU = '[Books] Change_niveau'
}

export class ActionBooksUpsertOne implements Action {
  readonly type = BookActionTypes.UPSERT_ONE;
  constructor(readonly payload: { book: Logo }) {}
}

export class ActionBooksUpsertAll implements Action {
  readonly type = BookActionTypes.UPSERT_ALL;
  constructor(readonly payload: { books: Logo[] }) {}
}

export class ActionBooksDeleteOne implements Action {
  readonly type = BookActionTypes.DELETE_ONE;
  constructor(readonly payload: { id: string }) {}
}

export class ActionBooksLikeOne implements Action {
  readonly type = BookActionTypes.CHANGE_NIVEAU;
  constructor(readonly payload: Logo) {}
}

export type BookActions = ActionBooksUpsertOne | ActionBooksDeleteOne | ActionBooksUpsertAll  | ActionBooksLikeOne;
