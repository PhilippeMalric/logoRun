import { Action } from '@ngrx/store';

export enum ArticleActionTypes {
  LoadArticles = '[Article] Load Articles',


}

export class LoadArticles implements Action {
  readonly type = ArticleActionTypes.LoadArticles;
}


export type ArticleActions = LoadArticles;
import { Jeu, Carte } from './jeu.model';

export enum JeuActionTypes {
  LoadAllArticles = '[article] Load_all',
  LoadAllArticlesSuccess = '[article] Load_all_succes',
  LoadAllArticlesFail = '[article] Load_all_fail',
  ClearOldArticles = '[article] ClearOldArticle',
  ReadArticle = '[article] ReadArticle',
  ReadAllArticles = '[article] ReadallArticle'
}

export class LoadAllAction implements Action {
  readonly type = JeuActionTypes.LoadAllArticles;
  constructor(readonly payload: { }) {}
}


export class LoadAllArticlesSuccess implements Action {
  readonly type = JeuActionTypes.LoadAllArticlesSuccess;
  constructor(readonly payload: {  }) {}
}

export class LoadAllArticlesFail implements Action {
  readonly type = JeuActionTypes.LoadAllArticlesFail;
  constructor(readonly payload: {}) {}
}

export class ClearOldEvents implements Action {
  readonly type = JeuActionTypes.ClearOldArticles;
  constructor(readonly payload: { }) {}
}

export class ReadArticle implements Action {
  readonly type = JeuActionTypes.ReadArticle;
}

export class ReadAllArticle implements Action {
  readonly type = JeuActionTypes.ReadAllArticles;
}

export type JeuActions = LoadAllArticlesFail | ReadArticle | LoadAllArticlesSuccess | LoadAllAction | ClearOldEvents | ReadAllArticle;
