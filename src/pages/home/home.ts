import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { SMS } from '@ionic-native/sms';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
testRadioOpen: boolean;
testRadioResult;
myName
accountRef : any[];
waterLevelRef: any[];
foodLevelRef: any[];
foodLevel: string;
waterLevel: string;
FeedingHistoryRef: AngularFireList<any>;
  constructor(public navCtrl: NavController,
  			  public database: AngularFireDatabase,
  			  private toastCtrl: ToastController,
  			  private alertCtrl: AlertController,  
  			  private afauth: AngularFireAuth,
  			  private sms: SMS,
  			  private androidPermissions: AndroidPermissions) {

 				this.database.list('Water Level').snapshotChanges().pipe(
		           	map (changes => 
						changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

					)
		        ).subscribe( waterLevel => {
		            this.waterLevelRef = waterLevel;
		            this.afauth.authState.subscribe( data => {
		                if(!data){ 

		                }else{
		                	var lastItem = null
		                    for( let item of this.waterLevelRef ){

		                    	if(item.Level_Water){
		                    		lastItem = item.Level_Water;
		                    	}
		                    	
		                    }
		                    this.waterLevel = lastItem;
		                    
		                }
		            });
		        });

		        this.database.list('Food Level').snapshotChanges().pipe(
		           	map (changes => 
						changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))

					)
		        ).subscribe( foodLevel => {
		            this.foodLevelRef = foodLevel;
		            this.afauth.authState.subscribe( data => {
		                if(!data){ 

		                }else{
		                	var lastItem = null
		                    for( let item of this.foodLevelRef ){

		                    	if(item.Level_Food){
		                    		lastItem = item.Level_Food;
		                    	}
		                    	
		                    }
		                    this.foodLevel = lastItem;
		                    
		                }
		            });
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
 

  this.FeedingHistoryRef = this.database.list('Feeding History');
  }



setFeedingHistory(){
	
	this.sms.send('09307875483', 'dispense food', {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    });

 let alert = this.alertCtrl.create();

alert.setTitle('Select Grams');

alert.addInput(
	{
	type : 'radio',
	label : '5 Grams',
	value : '5 Grams',
	checked : false}

	);


alert.addInput(
	{
	type : 'radio',
	label : '10 Grams',
	value : '10 Grams',
	checked : false}

	);


alert.addInput(
	{
	type : 'radio',
	label : '20 Grams',
	value : '20 Grams',
	checked : false}

	); 

alert.addButton('Cancel');
alert.addButton({
	text : 'Ok',
	handler: data => {
		this.testRadioOpen = false;
		this.testRadioResult = data;
		 console.log(this.testRadioResult);


let mynewTime =  new Date().toTimeString().substring(0,8);
let mynewDate = new Date().toDateString().toString();


this.FeedingHistoryRef.push({
Feeding_Amount: this.testRadioResult,
Name: this.myName,
Dispense_Date: mynewDate,
Dispense_Time: mynewTime
});
this.toastCtrl.create({
message: 'Pet Food Dispense Successfully',
duration: 3000,
position: 'top'
}).present();
this.navCtrl.setRoot(HomePage);

	}
});

alert.present().then(() => { this.testRadioOpen = true; });

	



}

setWaterHistory(){
	this.sms.send('09307875483', 'dispense water', {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    });
	this.toastCtrl.create({
	message: 'Water Dispense Successfully',
	duration: 3000,
	position: 'top'
	}).present();
}

recordVideo(){
	this.sms.send('09307875483', 'record video', {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    });
	this.toastCtrl.create({
	message: 'Recording',
	duration: 3000,
	position: 'top'
	}).present();
}

clickfacebook(){
	this.toastCtrl.create({
message: 'facebook clicked',
duration: 3000,
position: 'top'
}).present();
}

clicktwitter(){
	this.toastCtrl.create({
message: 'twitter clicked',
duration: 3000,
position: 'top'
}).present();
}
clickvimeo(){
	this.toastCtrl.create({
message: 'vimeo clicked',
duration: 3000,
position: 'top'
}).present();
}
clickgoogle(){
	this.toastCtrl.create({
message: 'google clicked',
duration: 3000,
position: 'top'
}).present();
}
}
