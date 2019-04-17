import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth'; 
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the FeedingHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feeding-history',
  templateUrl: 'feeding-history.html',
})
export class FeedingHistoryPage {
ProductRef: any[];
accountRef: any[];
myName
prodRef: AngularFireList<any>;
  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,  private afauth: AngularFireAuth,
  			  private database: AngularFireDatabase,  private toastCtrl: ToastController) {
 this.prodRef = this.database.list('Feeding History');
 
  	this.database.list('Feeding History').snapshotChanges().pipe(
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
      ).subscribe( accounts => {
         this.accountRef = accounts;

this.afauth.authState.subscribe( data => {
 

if(!data){ 

}else{
for( let item of this.accountRef )
if( item.Account_Uid == data.uid){
this.myName = item.Account_Name;
console.log(this.myName);
}else{}
}

});
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

 feedDelete(key : string){
this.prodRef.remove(key);
   this.toastCtrl.create({
message: 'Log Deleted',
duration: 3000,
position: 'top'
}).present();
 }

}

