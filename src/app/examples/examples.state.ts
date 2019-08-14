import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/core';

import { jeuReducer } from './authenticated/jeu.reducer';
import { Jeu, JeuState } from './authenticated/jeu.model';
import { bookReducer } from './crud/books.reducer';
import { LogoState } from './crud/books.model';


export const FEATURE_NAME = 'examples';

export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);



export const reducers: ActionReducerMap<ExamplesState> = {
  jeux: jeuReducer,
  books : bookReducer
};

export interface ExamplesState {
  jeux: JeuState;
  books: LogoState;
}

export interface State extends AppState {
  examples: ExamplesState;
}
