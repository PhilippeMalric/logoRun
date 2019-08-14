import { v4 as uuid } from 'uuid';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ROUTE_ANIMATIONS_ELEMENTS, selectName, AppState } from '@app/core';

import { State } from '../../examples/examples.state';
import { Logo, Vote } from '../../examples/crud/books.model';
import { ActionBooksUpsertAll} from '../../examples/crud/books.actions';
import { AngularFirestore } from 'angularfire2/firestore';
import { map, tap, take } from 'rxjs/operators';
import { BOOKS_KEY } from '../../examples/crud/books.effects';
import { DataService } from '@app/examples/gears/data.service';
import { Node } from '@app/examples/d3';

@Component({
  selector: 'anms-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GearsComponent implements OnInit {

  key:string = BOOKS_KEY

  entitiesBook$: Observable<any[]>;
  myLogos: any;
  subscription: Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private store2: Store<AppState>,

    public fb: FormBuilder,
    private router: Router,
    private dataS:DataService) {
      this.subscription = null
      this.entitiesBook$ = new Observable<any[]>()

      console.log("constructor!!")

      const inter1 = setInterval(
        ()=>{
          if(dataS.logoKey){
            dataS.logoKey.subscribe(
              (key)=>{
                console.log("key")
                console.log(key)
                this.key = key
                this.changeEntityBook()
              }
             )
             clearInterval(inter1);
          }
        }
        ,1000)
   }

changeEntityBook(){
  if(this.subscription){
    this.subscription.unsubscribe()
  }

  this.entitiesBook$ = this.dataS.fireStoreObservable(this.key)
  this.subscription = this.entitiesBook$.subscribe(
    (logos: Logo[]) => {
        console.log(logos);
        this.myLogos = JSON.parse(JSON.stringify(logos))
        this.changeDetectorRef.markForCheck();
        console.log(this.myLogos);
      })
}

  ngOnInit() {
  }

}
