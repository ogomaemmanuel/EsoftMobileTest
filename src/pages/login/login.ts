import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginModel } from "../../models/loginModel";
import { HomePage } from "../home/home";
import { ContactUsPage } from '../contact-us/contact-us';
import { UsersPage } from '../users/users';
import { UserDetailsServiceProvider } from '../../providers/user-details-service/user-details-service';

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
loginModel:LoginModel=new LoginModel();
  constructor(public userDetailService: UserDetailsServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
doLogin(){
 //console.log(this.loginModel.name + this.loginModel.password);
 this.userDetailService.renameUser();
 this.navCtrl.setRoot(UsersPage);
}
}
