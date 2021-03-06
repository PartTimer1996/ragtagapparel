import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {
  constructor( private auth: AuthService) {}
  loggedin: boolean;
  ngOnInit() {
    this.loggedin = this.auth.authenticated;
  }
  ngOnDestroy() {}
}
