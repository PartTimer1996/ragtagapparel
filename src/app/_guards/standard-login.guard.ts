import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';



import { AuthService } from '../_services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class StandardLoginGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      const loggedInGuard = this.authservice.user.pipe(
        take(1),
        map(user => !!user),
        tap(loggedIn => {
          console.log(loggedIn + ': Logged in status');
          if (!loggedIn) {
            this.router.navigate(['home']);
           }
      }
    ));

      const loggedOutGuard = this.authservice.user.pipe(
      take(1),
      map(user => !!!user),
      tap(loggedIn => {
        console.log(loggedIn + ': Logged Out Status');
        if (!loggedIn) {
          this.router.navigate(['home']);
         }
    }
  ));

      if (state.url.toString().toLocaleLowerCase().indexOf('dash')  !== -1 ) {
      return loggedInGuard;
       }
      else if (state.url.toString().toLocaleLowerCase().indexOf('login')  !== -1
      ||
      state.url.toString().toLocaleLowerCase().indexOf('register')  !== -1 ) {
      return loggedOutGuard;
      }
      }
    }




