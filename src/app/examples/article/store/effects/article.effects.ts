import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ArticleActionTypes, ArticleActions } from '../actions/article.actions';


@Injectable()
export class ArticleEffects {


  @Effect()
  loadArticles$ = this.actions$.pipe(
    ofType(ArticleActionTypes.LoadArticles),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ArticleActions>) {}

}
