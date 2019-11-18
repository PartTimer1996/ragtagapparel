import { Component, OnInit, ViewChildren, QueryList, Inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
