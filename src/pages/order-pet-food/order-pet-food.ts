import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { ToastController } from 'ionic-angular'; 
 

import { PendingOrdersPage } from '../pending-orders/pending-orders';

import { HomePage } from '../home/home';

/**
 * Generated class for the OrderPetFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-pet-food',
  templateUrl: 'order-pet-food.html',
})
export class OrderPetFoodPage {
ProductRef: any[];
userRef: any[];
testRadioOpen: boolean;
testRadioResult;
Names
Location
Mobile

Uname
Ulocation
Umobile

PetfoodOrder
orderRef: AngularFireList<any>;
  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  private toastCtrl: ToastController,
            private alertCtrl: AlertController,
  			  private database: AngularFireDatabase,
           private afauth: AngularFireAuth) {

  	this.orderRef = this.database.list('Pet Food Orders');
  	this.database.list('Products').snapshotChanges().pipe(
map (changes => 
	changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

	)
  		).subscribe( product => {
  			this.ProductRef = product
  		});
 


 this.database.list('Accounts').snapshotChanges().pipe(
map (changes => 
  changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

  )

      ).subscribe( account => {
        this.userRef = account;
 

this.afauth.authState.subscribe( data => {

if (!data){

}
  else{ 
for ( let items of this.userRef ){

  console.log(items);

if ( items.Account_Email.toLowerCase() == data.email && items.Account_Uid == data.uid ){
this.Uname = items.Account_Name;
this.Ulocation = items.Account_Address;
this.Umobile = items.Account_Number;
 break
}

} 

}


});

      


      });

 


this.afauth.authState.subscribe( data => {

if (!data){

}
  else{ 
/*for ( let items of this.userRef ){

  console.log(items);
/*
if ( items.Account_Email.toLowerCase() == data.email && items.Account_Uid == data.uid ){
this.Uname = items.Account_Name;
this.Ulocation = items.Account_Address;
this.Umobile = items.Account_Number;
 break
}

} */

}


});

      

  		
  }

getuser(){
  console.log(this.userRef);
}
OrderPetFood(){


 const prompt = this.alertCtrl.create({
      title: 'Order Quantity',
      message: "Enter Quantity",
      inputs: [
        {
          name: 'Quantity',
          placeholder: 'Quantity',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data.Quantity);
this.orderRef.push({
Name: this.Uname,
Location: this.Ulocation,
MobileNumber: this.Umobile,
PetFoodOrder: this.PetfoodOrder,
Quantity: data.Quantity,
Status: 'Pending'



 
});
this.toastCtrl.create({
message: 'Pet Food Ordered Successfully',
duration: 3000,
position: 'top'
}).present(); 
this.navCtrl.setRoot(HomePage);
//this.navCtrl.setRoot(PendingOrdersPage);




          }
        }
      ]
    });
    prompt.present();
  }










 




  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPetFoodPage'); 
  }
  ionViewWillLoad(){

    console.log('ionViewWillLoad OrderPetFoodPage'); 
 
  }

}
