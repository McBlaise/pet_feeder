import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'; 

import { LoginPage } from '../login/login';

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

Username
Password
Name
Address
Number
accountRef: AngularFireList<any>;
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
          public alertCtrl: AlertController,
  			   public database: AngularFireDatabase,
  			   private toastCtrl: ToastController,
           private afauth: AngularFireAuth) {
  		this.accountRef = this.database.list('Accounts');
  }

async AddUser(){
try{
const result = await this.afauth.auth.createUserWithEmailAndPassword(this.Username, this.Password);
 




this.accountRef.push({
Account_Email: this.Username,
Account_Uid: result.user.uid,
Account_Type: 'User',
Account_Password: this.Password,
Account_Name: this.Name,
Account_Address: this.Address,
Account_Number: this.Number,
Account_Approval: 'Pending'
});


this.toastCtrl.create({
message: 'User was successfully created',
duration: 3000,
position: 'top'
}).present();
this.navCtrl.setRoot(LoginPage);

 


const alert = this.alertCtrl.create({
      title: 'Your Account is Submitted',
      subTitle: 'Waiting for admin verification and approval',
      buttons: ['OK']
    });
    alert.present();


 
}catch(e){console.log(e)}


}





  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
export class MyPage {

  constructor(public alertCtrl: AlertController) { }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Your Account is Submitted',
      subTitle: 'Waiting for admin verification and approval',
      buttons: ['OK']
    });
    alert.present();
  }
}