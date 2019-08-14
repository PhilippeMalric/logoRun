import { EntityState } from "@ngrx/entity";

export interface Article{
  titre:string;
  description:string;
  loaded: false,
  loading: false,
  error: null,
}


export interface ArticleState extends EntityState<Article> {}
