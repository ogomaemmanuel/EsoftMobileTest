import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
  providers:[HTTP]
})
export class ContactUsPage {

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private http:HTTP) {
    this.http.get("https://jsonplaceholder.typicode.com/posts",{},{}).then(data=>{
      this.presentAlert(data.data);
    }).catch(err=>{
  console.log(err);
    });
  }
ngInit(){
 
 
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }
  presentAlert(message:any) {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: JSON.stringify(message),
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
