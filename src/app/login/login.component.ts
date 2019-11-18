import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../_models/user';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: User = new User();
  success: boolean;
  isSubmitted  =  false;
  errorMessage: string;
  hide;
  @ViewChild('f', {static: false}) form: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.hide = true;
  }

  login(email, password) {
    this.authService.firebaseLogin(email, password);
    this.errorMessage = this.authService.errormessage;
  }

}
