import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, selectName, selectAuth, AppState } from '@app/core';
import { JeuServiceService } from './jeu-service.service';
import { Carte } from './jeu.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { auth } from 'firebase';
import { AuthState } from '@app/core/auth/auth.models';

@Component({
  selector: 'anms-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticatedComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  cartes$: Observable<{carte:Carte,id:string}[]>;
  authName: Observable<string>;

  constructor(public jeuServiceService: JeuServiceService, private store: Store<AppState>) {

    this.authName = this.store.pipe(select(selectName))

  }

  ngOnInit() {

    this.cartes$ = this.jeuServiceService.getCartesFromFirebase()



  }

onClick(carteId){

  console.log("click")

  console.log(this.authName)
  this.jeuServiceService.modifyCartesToFirebase(carteId,{valeur:2,couleur:"coeur",noms:[]})

}


}
