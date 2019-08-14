import { Injectable } from '@angular/core';
import { Link } from '../d3';
import { Node } from '../d3';
import { Subject, BehaviorSubject } from 'rxjs';
import { BOOKS_KEY } from '../crud/books.effects';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store } from '@ngrx/store';
import { State } from '../examples.state';
import { tap, map } from 'rxjs/operators';
import { Logo } from '../crud/books.model';
import { ActionBooksUpsertAll } from '../crud/books.actions';

@Injectable()
export class DataService {

  links:Link[]

  scian:any
  cnp:any
  cnpToScian:any

  logoKey:Subject<string>

  constructor(
    private afs: AngularFirestore,
    public store: Store<State>,) {
    this.logoKey = new BehaviorSubject<string>(BOOKS_KEY)

  }

  click(){
    console.log("Hello")
  }

fireStoreObservable(key:string){
  return this.afs
    .collection('logos')
    .doc(key)
    .valueChanges()
    .pipe(
      tap((books: Logo[]) => {
        console.log('!!dispatch : ');
        console.log(books);
      }),
      map((obj: any) => obj.examples.books),
      map((obj: any) => obj.entities),

      map(entities => {
        return Object.keys(entities).map((k: string) => entities[k]);
      }),
      /*
      map((books:Book[]) => {
        console.log("books11");
        console.log(books);
        return books.map((book:Book)=>{
          let leVote = null
          if(book.votes){
            leVote = book.votes.filter((vote)=>{
              return vote.nom == this.authName
            })
          }
          else{
            leVote = []
          }


          let vote:Vote = null
          if(leVote.length > 0){
            vote = leVote[0]
            book.niveauDaccord = vote.niveauDaccord
            book.commentaire = vote.commentaire
            book.style = this.getColor(vote.niveauDaccord)
          }
          else{
            book.commentaire = ""
            book.niveauDaccord = 0
            book.style = ""
          }

          return book
        })
      })
      ,
      */
      tap((logos: Logo[]) => {

        console.log('dispatch : ');
        let logos2 = logos.map(
          (book)=>new Node(book.id,book.url_img,book.texte,book.niveauDaccord)
        )
        this.store.dispatch(
          new ActionBooksUpsertAll({ books: logos })
        );
      })
      )
}

}
