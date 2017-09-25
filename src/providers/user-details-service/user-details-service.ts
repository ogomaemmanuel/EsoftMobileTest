import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../models/userModel';
import {Events} from 'ionic-angular';

/*
  Generated class for the UserDetailsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDetailsServiceProvider {
  public user: User = new User();
  @Output() notify: EventEmitter<User>= new EventEmitter<User>();

  constructor(public events:Events,public http: Http) {
    console.log('Hello UserDetailsServiceProvider Provider');
    this.loadUser();
  }
  loadUser() {

    var userx = new User();
    userx.title = "Emmanuel";
    this.user = userx;
    this.events.publish("logedInUser",this.user);
   // this.notify.emit(this.user);
  }
  renameUser() {
    var userx = new User();
    userx.title = "King"
    this.user = userx;
    this.events.publish("logedInUser",this.user);
  }
}
