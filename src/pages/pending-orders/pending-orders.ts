import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

import { MapsPage } from '../maps/maps';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the PendingOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-orders',
  templateUrl: 'pending-orders.html',
})
export class PendingOrdersPage {
AccountRef: any[];

  constructor(public navCtrl: NavController,
  public navParams: NavParams, private database: AngularFireDatabase) {
  	this.database.list('Pet Food Orders').snapshotChanges().pipe(
map (changes => 
	changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

	)
  		).subscribe( accounts => {
  			this.AccountRef = accounts 

  		});

  }
AcceptOrder(name: String, location: String, mobilenumber: String, petfood: String, quan: String, key: String){

console.log(quan);
  let data = {
    pending_name : name,
    pending_location : location,
    pending_mobilenumber : mobilenumber,
    pending_petfood : petfood,
    pending_quantity : quan,
    pending_key : key
  }


  this.navCtrl.push(MapsPage, data)


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingOrdersPage');
  }


}
