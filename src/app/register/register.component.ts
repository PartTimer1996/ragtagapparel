import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import {Register} from '../_models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: Register = new Register();
  @ViewChild('f', {static: false}) form: any;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }

  register(email, password, displayName , photoURL) {
    this.authService.firebaseSignup(email, password, displayName , photoURL);
    this.router.navigateByUrl('Dashboard');
  }

}
