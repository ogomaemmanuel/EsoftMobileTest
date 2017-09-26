import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { User } from '../../models/userModel';
import { UserProvider } from '../../providers/user/user';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

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
  private users: any = {};
  constructor(public http: Http, public loadingCtrl: LoadingController, public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.users.title = "ffff"

  }
  ngOnInit(): void {
    this.getSingleUser();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }
  getUsers() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    this.userProvider.getSingeUserUsingStoredId().then(data => {
      loader.dismiss();

      this.users = Promise.resolve(data);
      console.log(this.users) //= data;
    })
    loader.present();

  }
  private getSingleUser() {
    this.userProvider.getUsername().then(result=>{
      this.http.get("https://jsonplaceholder.typicode.com/posts/" + Number(result)).map(resp => resp.json()).subscribe(data => {
        console.log(data);
        this.users = data;
      });
    })
   
  }

}
