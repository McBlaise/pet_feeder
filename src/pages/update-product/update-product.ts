import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
 
import { ProductListPage } from '../product-list/product-list';
/**
 * Generated class for the UpdateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-product',
  templateUrl: 'update-product.html',
})
export class UpdateProductPage {
  PName
  PKilos
  PPrice
  PDescription
    key
    name
    kilos
    price
    description
    productRef : AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private  database : AngularFireDatabase) {
  	this.key= this.navParams.get('product_key')
  	this.name = this.navParams.get('product_name')
  	this.kilos = this.navParams.get('product_kilos')
  	this.price = this.navParams.get('product_Price')
  	 this.productRef = this.database.list('Products')

    this.description = this.navParams.get('product_Description')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProductPage');
  }


updateProduct(){
	this.productRef.update(this.key,{ 
		Product_Name: this.PName,
		Product_Kilos: this.PKilos,
		Product_Price: this.PPrice,
    Product_Description: this.PDescription

	} ).catch(error => console.log(error));

this.navCtrl.setRoot(ProductListPage)
}
}
