import { EntityState } from '@ngrx/entity';



export interface Jeu {
  etat:string;
  tour:string;
  cartes:Carte[];
}


export interface JeuState extends EntityState<Jeu> {}

export interface Carte {
  valeur:number;
  couleur:string;
  noms:string[];
}
