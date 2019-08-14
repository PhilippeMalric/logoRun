import { Component, OnInit } from '@angular/core';

import { GoogleAuthService } from '../google-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
    public authService: GoogleAuthService
  ) { }

  ngOnInit() { }

}
