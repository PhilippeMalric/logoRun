import { Component, OnInit } from '@angular/core';

import { GoogleAuthService } from '../google-auth.service';
import { Store, select } from '@ngrx/store';
import { AppState, selectName } from '@app/core';
import { take } from 'rxjs/operators';
import { selectEmail } from '../auth.selectors';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  authName$: any;
  authName: any;
  email$: any;
  email: any;

  constructor(
    private store2: Store<AppState>,
    public authService: GoogleAuthService
  ) {
    this.authName$ = this.store2.pipe(select(selectName))
    this.authName$.pipe(take(1)).subscribe(user => {
      this.authName = user;
      console.log("authName")
      console.log(user)
    })
    this.email$ = this.store2.pipe(select(selectEmail))
    this.email$.pipe(take(1)).subscribe(email => {
      this.email = email;
      console.log("email")
      console.log(email)
    })
   }

  ngOnInit() {
  }

}
