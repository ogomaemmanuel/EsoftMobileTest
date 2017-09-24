import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[FileOpener,FileTransfer]
})
export class HomePage {

  

  constructor(private fileOpener: FileOpener,public navCtrl: NavController,menu: MenuController,private transfer: FileTransfer) {

 menu.enable(true);
 this.fileOpener.open('C:/Users/Emmanuel/Downloads/Cygwin.pdf', 'application/pdf')
  .then(() => console.log('File is opened'))
  .catch(e => console.log('Error openening file', e));
    
   
  }

}
