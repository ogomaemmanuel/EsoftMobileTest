import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { User } from '../../models/userModel';
import { UserProvider } from '../../providers/user/user';
import 'rxjs/add/operator/map';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [UserProvider]
})
export class UsersPage implements OnInit {
  private users: User[] = [];
  constructor(public loadingCtrl: LoadingController, public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {


  }
  ngOnInit(): void {
    this.getUsers();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }
  getUsers() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    this.userProvider.getUsers().subscribe(data => {
      loader.dismiss();
      this.users = data;
    })
    loader.present();

  }

}
