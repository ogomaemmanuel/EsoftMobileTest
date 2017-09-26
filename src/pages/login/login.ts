import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginModel } from "../../models/loginModel";
import { HomePage } from "../home/home";
import { ContactUsPage } from '../contact-us/contact-us';
import { UsersPage } from '../users/users';
import { UserDetailsServiceProvider } from '../../providers/user-details-service/user-details-service';
import { User } from '../../models/userModel';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
 
})
export class LoginPage {
 @Input() user:User;
loginModel:LoginModel=new LoginModel();
  constructor(public storage:Storage,public userDetailService: UserDetailsServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
doLogin(){
 
  
 this.userDetailService.renameUser();
 this.storage.set("postId","4");
 this.navCtrl.setRoot(UsersPage);
}
}
