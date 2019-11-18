import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Item } from '../_interfaces/item';
import { DatabaseService } from '../_services/database.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit, OnDestroy {

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
    this.db.getClothingItems().subscribe(
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
