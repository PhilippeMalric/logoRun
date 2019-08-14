import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromArticle from './store/reducers/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './store/effects/article.effects';
import { ArticlesPageComponent } from './containers/articles-page/articles-page.component';

@NgModule({
  declarations: [ArticlesPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('article', fromArticle.ArticlesReducer),
    EffectsModule.forFeature([ArticleEffects])
  ]
})
export class ArticleModule { }



/*
ng g module user --flat false
ng g feature user/store/user --module ./user/user.module.ts --group
ng g container user/containers/UsersPage
*/
