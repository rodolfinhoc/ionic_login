import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;

  datastorage: any;
  name: string;

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders,
    private storage: Storage,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ionViewDidEnter(){
    this.storage.get('storage_xxx').then((res)=>{
      console.log(res);
      this.datastorage = res;
      this.name = this.datastorage.your_name;
  });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }

  async prosesLogout(){
    this.storage.clear();
    this.navCtrl.navigateRoot(['/intro']);
    const toast = await this.toastCtrl.create({
      message: 'Logout efetuado com sucesso!',
      duration: 1500
    });
    toast.present();
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }else{
      document.body.setAttribute('color-theme','light');
    }
  }

}
