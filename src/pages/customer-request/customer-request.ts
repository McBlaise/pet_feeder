import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { map } from 'rxjs/operators';

import { ToastController } from 'ionic-angular';
/**
 * Generated class for the CustomerRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-request',
  templateUrl: 'customer-request.html',
})
export class CustomerRequestPage {
AccountRef: any[];

accountRef: AngularFireList<any>;
  constructor(public navCtrl: NavController, 
   private toastCtrl: ToastController,public navParams: NavParams, private database: AngularFireDatabase) {
   this.accountRef = this.database.list('Accounts');
   
this.database.list('Accounts').snapshotChanges().pipe(
map (changes => 
	changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

	)
  		).subscribe( accounts => {
  			this.AccountRef = accounts 

  		});

  }
 
  getkey(key: string){
this.accountRef.update(key,{ Account_Approval : "Approved"} ).catch(error => console.log(error));
this.toastCtrl.create({
message: 'User Accepted',
duration: 3000,
position: 'top'
}).present();
  }
  declineAccount(key: string){
this.accountRef.update(key,{ Account_Approval : "Decline"} ).catch(error => console.log(error));
this.toastCtrl.create({
message: 'User Declined',
duration: 3000,
position: 'top'
}).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerRequestPage');
  }

}
