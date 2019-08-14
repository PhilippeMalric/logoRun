import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService, selectAuth } from '@app/core';

import { State } from '../examples.state';
import { BookActionTypes } from './books.actions';
import { selectBooks } from './books.selectors';
import { selectName } from '../../core/auth/auth.selectors';
import { Logo, LogoState } from './books.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

export const BOOKS_KEY = '93J4zl67PuNfi2imNYQu';

@Injectable()
export class BooksEffects {
  constructor(
    private afs: AngularFirestore,
    private actions$: Actions<Action>,
    private store: Store<State>,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  persistBooks = this.actions$.pipe(
    ofType(BookActionTypes.UPSERT_ONE, BookActionTypes.DELETE_ONE,BookActionTypes.CHANGE_NIVEAU ),
    withLatestFrom(this.store),

    tap(([actions, store]) =>
    {
      console.log("store")
      console.log(store)

      this.afs
      .collection('logos').doc("23DvoWw19C5EDNSMmnb4").valueChanges().subscribe(
        (values:any)=>{
         console.log("values")
         console.log(values)
         if(store.auth.uid in values){
          let id = values[store.auth.uid]
          const collection: AngularFirestoreCollection<LogoState> = this.afs.collection('logos')
          collection.doc(id).update(store)
         }
         else{
           console.log("User not in index : 23DvoWw19C5EDNSMmnb4")
         }

    })
    }));



}
