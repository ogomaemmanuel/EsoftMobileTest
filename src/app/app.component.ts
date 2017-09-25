import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Events} from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { UserDetailsServiceProvider } from '../providers/user-details-service/user-details-service';
import { User } from '../models/userModel';
import { Subscription } from 'rxjs/Subscription';
@Component({
  templateUrl: 'app.html',
  providers:[]
})
export class MyApp {
  rootPage:any = LoginPage;
   @ViewChild(Nav) nav: Nav;
   user:string;
  
  pages: Array<{title: string, component: any}>

  constructor(events:Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      events.subscribe("logedInUser",(data)=>{
        this.user=data.title;
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
     this.pages = [
      { title: 'List', component: LoginPage }
    ];
  }
  chat(){}
   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page===HomePage){
      this.nav.setRoot(HomePage);
    }
    else {
      this.nav.setRoot(LoginPage);
    }
  }
}

