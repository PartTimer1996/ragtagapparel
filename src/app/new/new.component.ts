import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Item } from '../_interfaces/item';
import { DatabaseService } from '../_services/database.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit, OnDestroy {
  months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  month: string;
  storeItems;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Item>;
  errorMessage;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
   // storeItems$: Observable<Item[]>;
  constructor(private db: DatabaseService ) {
   }
  ngOnInit() {
    const date = new Date();
    this.month = this.months[date.getMonth()];
    this.db.getNewShopItems().subscribe(
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
