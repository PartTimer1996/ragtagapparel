import { Injectable } from '@angular/core';
import { User } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
  /**
   * isloggedin
   */
  public isloggedin() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  /**
   * logout
   */
  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
