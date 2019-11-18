import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  opened: boolean;
  place: string;
  title: string;
  User;
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute, private titleService: Title,
               private auth: AuthService) { }

  ngOnInit() {
    this.User = this.auth.user;
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
          return route;
        }
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data))
      .subscribe(
        (event) => this.titleService.setTitle(event.title));

    this.router.events.pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) {
              route = route.firstChild;
              return route;
            }
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data))
          .subscribe(
            (event) => this.title = this.titleService.getTitle());
          }

    logout() {
      this.auth.firebaseLogout();
      this.router.navigateByUrl('');
    }
}
