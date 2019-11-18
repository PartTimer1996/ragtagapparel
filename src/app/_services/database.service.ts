import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  month: number;
  year: number;
  constructor(private db: AngularFirestore) { }

getShopItemsAndMetaData$<T>(): Observable<any[]> {
  return this.db.collection('items').snapshotChanges()
  .pipe(
    map((actions: DocumentChangeAction<T>[]) => {
      return actions.map((a: DocumentChangeAction<T>) => {
        const data: Object = a.payload.doc.data() as T;
        const id = a.payload.doc.id;
        return { id, data };
      });
    }),
  );
}
getShopItemsByID$<T>(id): Observable<any[]> {
  return this.db.collection('items', ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', id)).snapshotChanges()
  .pipe(
    map((actions: DocumentChangeAction<T>[]) => {
      return actions.map((a: DocumentChangeAction<T>) => {
        const data: Object = a.payload.doc.data() as T;
        const id = a.payload.doc.id;
        return { id, data };
      });
    }),
  );
}
getShopItemsBySearch<T>(searchterm): Observable<any[]> {
return this.db.collection('items', ref => ref.where(('name'), '>=', searchterm)
.where(('name'), '<=', searchterm + '\uf8ff')).snapshotChanges()
  .pipe(
    map((actions: DocumentChangeAction<T>[]) => {
      return actions.map((a: DocumentChangeAction<T>) => {
        const data: Object = a.payload.doc.data() as T;
        const id = a.payload.doc.id;
        return { id, data };
      });
    }),
  );
}
getAllShopItems(): Observable<any[]> {
  return this.db.collection('items').valueChanges();
}

getNewShopItems(): Observable<any[]> {
  const date = new Date();
  this.month = date.getMonth() + 1;
  this.year = date.getFullYear();
  const thisMonth = new Date(`${this.year}-${this.month}-01`);
  return this.db.collection('items', query => query
  .where('dateadded', '>', thisMonth )).valueChanges();
}
getClothingItems(): Observable<any[]> {
  return this.db.collection('items', query => query
  .where('category', '==', 'clothes' )).valueChanges();
}
getArtItems(): Observable<any[]> {
  return this.db.collection('items', query => query
  .where('category', '==', 'art' )).valueChanges();
}
getOtherItems(): Observable<any[]> {
  return this.db.collection('items', query => query
  .where('category', '==', 'other' )).valueChanges();
}
}
