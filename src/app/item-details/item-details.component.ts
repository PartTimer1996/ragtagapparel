import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatabaseService } from '../_services/database.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  id;
  match$;
  constructor(private route: ActivatedRoute, private location: Location, private db: DatabaseService) { }

  ngOnInit() {
    this.getItem();
    }

    getItem(){
      this.id = this.route.snapshot.paramMap.get('id');
      this.match$ =  this.db.getShopItemsByID$(this.id);
    }
    goBack(): void {
      this.location.back();
    }

}
