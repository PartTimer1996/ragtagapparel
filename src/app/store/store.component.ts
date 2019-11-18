import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Observable, from, of } from 'rxjs';
import { Item } from './../_interfaces/item';
import { DatabaseService } from '../_services/database.service';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit, OnDestroy {
  // Columns used for functional all data display
  // displayedColumns: string[] = [ 'name', 'description', 'price', 'URL'];
  metadata$;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Item>;
  errorMessage;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  User;
  constructor(private db: DatabaseService, private auth: AuthService ) {
   }
  ngOnInit() {
    this.db.getShopItemsAndMetaData$().subscribe(res => this.metadata$ = res);
    this.User = this.auth.user;
    this.db.getShopItemsAndMetaData$().subscribe(
      items => {
      this.dataSource = new MatTableDataSource<Item>(items);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      });
  }


applySearchFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
applySelectFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

ngOnDestroy() {
  if (this.dataSource) {
    this.dataSource.disconnect();
  }
}
}
