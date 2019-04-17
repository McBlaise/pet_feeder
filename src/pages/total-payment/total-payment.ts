import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PendingOrdersPage } from '../pending-orders/pending-orders';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { map } from 'rxjs/operators';
/**
 * Generated class for the TotalPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total-payment',
  templateUrl: 'total-payment.html',
})
export class TotalPaymentPage {
Additional_Payment
completeTransaction: AngularFireList<any>;
ProductRef: any[];
orderRef: AngularFireList<any>;
Name
Location
PhoneNumber
Price
PetFoodOrder
Quan
key
TotalPrice
  constructor(public navCtrl: NavController, public navParams: NavParams,  private database: AngularFireDatabase) {



  this.completeTransaction= this.database.list('Complete Transactions');


       this.Name= this.navParams.get('pending_name');
   this.Location= this.navParams.get('pending_location');
       this.PhoneNumber= this.navParams.get('pending_mobilenumber');
       this.PetFoodOrder= this.navParams.get('pending_petfood');
        this.Quan= this.navParams.get('pending_quantity');
this.key = this.navParams.get('pending_key');

           this.orderRef = this.database.list('Pet Food Orders');


 	this.database.list('Products').snapshotChanges().pipe(
map (changes => 
	changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

	)
  		).subscribe( product => {
  			this.ProductRef = product



 for ( let items of this.ProductRef ){

    

if ( items.Product_Name == this.PetFoodOrder  ){
 
 this.Price = items.Product_Price;
 
 }else{

 }

}
  		});
 
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalPaymentPage');
  }


Calculate(){
  console.log(this.key);
  try{

    let mynewDate = new Date().toDateString().toString();

this.completeTransaction.push({
Name: this.Name,
Location: this.Location,
PhoneNumber: this.PhoneNumber,
PetFoodOrder: this.PetFoodOrder,
Quantity: this.Quan,
Price: this.Price,
TotalPrice: this.Price*1 * this.Quan*1,
AdditionalPayment: this.Additional_Payment*1 + 0,
Status: "Complete",
Date: mynewDate


});
 

this.orderRef.update(this.key,{ Status : "Complete"} ).catch(error => console.log(error));
  }catch(e){
    console.log(e.message);
  }

this.navCtrl.setRoot(PendingOrdersPage);
}
}
