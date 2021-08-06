import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/home/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/home/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/home/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/home/Trash', icon: 'trash' },
    { title: 'DPV', url: '/CreatePDV/DPV', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public navCtrl: NavController
  ) {

    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('storage_xxx').then((res) => {
      if (res== null){
        this.navCtrl.navigateRoot('/login');
      }else{
        this.navCtrl.navigateRoot('/home/Inbox');
      }
    });
  }
}
