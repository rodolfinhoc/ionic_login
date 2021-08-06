import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  your_name: string = "";
  email_address: string = "";
  password: string = "";
  confirm_pass: string = "";

  disabledButton;
  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }

 async tryRegister(){
    if(this.your_name == ""){
      this.presentToast('Campo nome é obrigatório!');
    }else if(this.email_address == ""){
      this.presentToast('Campo email é obrigatório!');
    }else if(this.password == ""){
      this.presentToast('Campo senha é obrigatório!');
    }else if(this.confirm_pass!=this.password){
      this.presentToast('A senha não é a mesma!');
    }else{
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Por favor, aguarde...',
      });
      loader.present();

      return new Promise( resolve =>{
        let body = {
          aksi: 'proses_register',
          your_name: this.your_name,
          email_address: this.email_address,
          password: this.password
        }

        this.accsPrvds.postData(body, 'http://localhost:8080/ionic/api/proses_api.php').subscribe((res:any) => {
          if(res.success==true){
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
            this.router.navigate(['/login']);
          }else{
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
          }
        },(err)=>{
          loader.dismiss();
          this.disabledButton = false;
          this.presentAlert('Timeout');
        });
      });
    }

  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }
  async presentAlert(a){
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
        {
        text:'Close',
        handler:(blah) => {
          console.log('Confirm Cancel: blah');
          //action
        }
      },{
        text: 'Try Again',
        handler: () =>{
          this.tryRegister();
        }
      }
      ]
    });
    await alert.present();
  }
}
