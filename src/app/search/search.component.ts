import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../_services/database.service';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  loading: boolean;
  results$;
  searched = false;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

  searchForItems(searchterm) {
    if (searchterm !== '') {
    this.db.getShopItemsBySearch(searchterm).pipe(
      tap((_) => this.loading = true),
      tap((_) => this.searched = true),
      debounceTime(1000),
      distinctUntilChanged(),
      tap((_) => this.loading = false))
      .subscribe(res =>
      this.results$ = res);
  }
}
}
