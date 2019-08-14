
import { ArticleActions, ArticleActionTypes, LoadAllAction } from '../actions/article.actions';

import { Article, ArticleState } from '../../article.model';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export function sortByTitre(a: Article, b: Article): number {
  return a.titre.localeCompare(b.titre);
}

export interface ArticleEntity {
  data: Article;
  read: boolean;
}

export function selectUserId(a: Article): string {
  //In this case this would be optional since primary key is id
  return a.titre;
}

export const articleEntityAdapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  sortComparer: sortByTitre,
  selectId: (article: Article) => article.titre,
});

export const initialState: ArticleState = articleEntityAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: null,
  titre:"",
  description:""
});


export function ArticlesReducer(state = initialState, action: ArticleActions): ArticleState {
  switch (action.type) {

  }
  return state;
}

export const getEventsLoading = (state: ArticleState) => state.entities.loading;
export const getEventsLoaded = (state: ArticleState) => state.entities.loaded;
export const getEventsError = (state: ArticleState) => state.entities.error;
