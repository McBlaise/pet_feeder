import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { map } from 'rxjs/operators';

import { UpdateProductPage } from '../update-product/update-product';
/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
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
    console.log('ionViewDidLoad ProductListPage');
  }


UpdateProduct(key : String, Name : String, kilos: String, price: String, description: String){

  let data = {
    product_key : key,
    product_name : Name,
    product_kilos : kilos,
    product_Price : price,

    product_Description : description
  }

  console.log(data)
  this.navCtrl.push(UpdateProductPage, data)
}
  

}
