import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../examples.state';

export const selectJeuxState = createSelector(
  selectExamples,
  (state: ExamplesState) => state.jeux
);

export const selectJeuTour = createSelector(
  selectJeuxState,
  state => state.entities
);


export const selectJeuxEtat = createSelector(
  selectJeuxState,
  state => state.entities
);

export const selectTourEtat = createSelector(
  selectJeuTour,
  selectJeuxEtat,
  (tour, etat) => {
    return etat;
  }
);

