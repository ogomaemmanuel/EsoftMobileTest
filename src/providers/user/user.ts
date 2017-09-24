import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import { User } from '../../models/userModel';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public users: User[] = [];
  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }
  getUsers() {
   return this.http.get("https://jsonplaceholder.typicode.com/posts").map(resp=>resp.json());


  }
}
