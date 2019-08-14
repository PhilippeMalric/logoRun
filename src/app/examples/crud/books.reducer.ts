import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Logo, LogoState } from './books.model';
import { BookActionTypes, BookActions } from './books.actions';

import {constatation} from '../../../assets/data/constatation'
import { select } from '@ngrx/store';
import { selectAuth } from '@app/core/auth/auth.selectors';

export function sortByTitle(a: Logo, b: Logo): number {
  return a.texte.localeCompare(b.texte);
}

export const bookAdapter: EntityAdapter<Logo> = createEntityAdapter<Logo>({
  sortComparer: sortByTitle
});

export const initialState: LogoState = bookAdapter.getInitialState({
  ids: [],
  entities: {},

});

export function bookReducer(
  state: LogoState = initialState,
  action: BookActions
): LogoState {
  switch (action.type) {
    case BookActionTypes.UPSERT_ONE:
      return bookAdapter.upsertOne(action.payload.book, state);


    case BookActionTypes.UPSERT_ALL:
        return bookAdapter.upsertMany(action.payload.books, state);


    case BookActionTypes.DELETE_ONE:
      return bookAdapter.removeOne(action.payload.id, state);

    case BookActionTypes.DELETE_ONE:

        return bookAdapter.removeOne(action.payload.id, state);


    case BookActionTypes.CHANGE_NIVEAU:
        let logoState: LogoState = JSON.parse(JSON.stringify(state))
        console.log(logoState.entities)
        console.log(action.payload.id)
        logoState.entities[action.payload.id].niveauDaccord += 1
        return logoState;
    /*
        let votes = action.payload.book.votes.slice(0);
        let votes2 = votes.filter(v=>v.nom != action.payload.vote.nom)

        votes2.push(action.payload.vote)

        console.log("book")
        console.log(action.payload.book)
        let oldbook = action.payload.book
        return bookAdapter.upsertOne({...oldbook,votes:votes2}, state);
*/
    default:
      return state;
  }
}
