import { Component, OnInit } from '@angular/core';

import { GoogleAuthService } from '../google-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  constructor(
    public authService: GoogleAuthService
  ) { }

  ngOnInit() {
  }

}
