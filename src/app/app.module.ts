import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { UserProvider } from '../providers/user/user';
import { UsersPage } from '../pages/users/users';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
import { UserDetailsServiceProvider } from '../providers/user-details-service/user-details-service';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContactUsPage,
    UsersPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ContactUsPage,
    UsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    UserDetailsServiceProvider
  ]
})
export class AppModule {}
