import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private db: AngularFirestore) { }

  getShopItems(){
    return this.db.collection('items').valueChanges();
}
}
