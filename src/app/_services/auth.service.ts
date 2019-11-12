import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_interfaces/user';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { Observable, of } from 'rxjs';
import { switchMap, take, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

// map the user data to the Observable stored in the user db
user: Observable<User>;
// Get basic user auth data not mapped to document in db
// user: any;
errormessage: string;
errorcode: string;
authState: boolean;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
      // Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      );
    }

    firebaseLogin(email, password) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then(() => {
        this.router.navigateByUrl('');
       })
      .catch(error => {
      this.errormessage = error.message;
      console.log(`Error found: Code: ${this.errorcode}, Message: ${this.errormessage}`);
      });
    }

    firebaseSignup(email, password, displayName, photoURL) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        this.updateUserData(credential.user, displayName, photoURL);
        this.router.navigateByUrl('Dashboard');
       })
      .catch(error => {
      // Handle Errors here.
      this.errorcode = error.code;
      this.errormessage = error.message;
      console.log(`Error found: Code: ${this.errorcode}, Message: ${this.errormessage}` );
    });
  }

  firebaseLogout() {
    this.afAuth.auth.signOut()
    .catch(error => {
      // Handle Errors here.
      this.errorcode = error.code;
      this.errormessage = error.message;
      console.log(`Error found: Code: ${this.errorcode}, Message: ${this.errormessage}` );
    });
}
  private updateUserData(user, displayName, photoURL) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName,
      photoURL
    };
    return userRef.set(data, { merge: true });
  }

get authenticated(): boolean {
    return this.authState !== null;
}

// Returns true if user is logged in
get currentUserObservable(): any {
  return this.afAuth.auth;
}


}
