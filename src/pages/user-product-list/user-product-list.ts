import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase} from 'angularfire2/database';
import { map } from 'rxjs/operators';
/**
 * Generated class for the UserProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-product-list',
  templateUrl: 'user-product-list.html',
})
export class UserProductListPage {
ProductRef: any[];
 constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  private database: AngularFireDatabase) {
  	this.database.list('Products').snapshotChanges().pipe(
map (changes => 
	changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

	)
  		).subscribe( product => {
  			this.ProductRef = product
  		});

  		
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProductListPage');
  }

}
