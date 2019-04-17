 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { map } from 'rxjs/operators';
/**
 * Generated class for the TransactionCompletesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-completes',
  templateUrl: 'transaction-completes.html',
})
export class TransactionCompletesPage {
ProductRef: any[]; 
  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  private database: AngularFireDatabase) {
 
  	this.database.list('Complete Transactions').snapshotChanges().pipe(
map (changes => 
	changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

	)
  		).subscribe( product => {
  			this.ProductRef = product
  		});

  		
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionCompletesPage');
  }

}
