import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
 

import { HomePage } from '../home/home';
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

accountRef: AngularFireList<any>;
ProductName
Kilos
Price
Description
  constructor(public navCtrl: NavController, public navParams: NavParams,  public database: AngularFireDatabase,
  			   private toastCtrl: ToastController) {
  this.accountRef = this.database.list('Products');
  }


AddProduct(){

this.accountRef.push({
Product_Name: this.ProductName,
Product_Kilos: this.Kilos,
Product_Price: this.Price,
Product_Description: this.Description
});
this.toastCtrl.create({
message: 'Product Successfully Added',
duration: 3000,
position: 'top'
}).present();
this.navCtrl.setRoot(HomePage);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
