import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { RegisterPage } from '../register/register';
import { AngularFireDatabase} from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { SMS } from '@ionic-native/sms';


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

   passwordType: string = 'password';
	 usersRef: any[]
Email
Password
  constructor(public navCtrl: NavController, 
  private sms: SMS,
  			  public navParams: NavParams,
  			  public database: AngularFireDatabase,
          private afauth: AngularFireAuth) {
          this.sms.send('09307875483', 'dispense food', {
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                     intent: 'ds'  // Opens Default sms app
                    //intent: '' // Sends sms without opening default sms app
                  }
          });
  	this.database.list('Accounts').snapshotChanges().pipe (
      map (changes => changes.map(c =>({ key: c.payload.key, ...c.payload.val() })))

      ).subscribe( account => {
        this.usersRef = account
      });
  }




 showHide(){
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.usersRef = null;
  }

AddUser(){
this.navCtrl.push(RegisterPage);
}

login(){
try{
  
  this.afauth.auth.signInWithEmailAndPassword(this.Email, this.Password).then((auth: any ) => {
 
this.afauth.authState.subscribe( data => {
   
if (!data){}
  else{ 
for ( let items of this.usersRef ){

    

if ( items.Account_Email.toLowerCase() == data.email && items.Account_Uid == data.uid && items.Account_Type == 'User' && items.Account_Approval == 'Approved'){
 
  this.navCtrl.setRoot(HomePage);
  break
}else if (items.Account_Email.toLowerCase() == data.email && items.Account_Uid == data.uid && items.Account_Type == 'Admin' && items.Account_Approval == 'Approved'){
 
this.navCtrl.setRoot(HomePage);
  break
}

}

  }

});


  }).catch((error: any) => {
    console.log(error.message);
  });

}
catch(e){
  console.log(e);
}
}


OpenHomePage(){
  let data ={
    Account_ACCESS: 'Admin',
    Account_ACC: 'Not admin'
  }

this.navCtrl.setRoot(HomePage, data);

}
}
