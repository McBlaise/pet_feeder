import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TotalPaymentPage } from '../total-payment/total-payment';
import { } from 'google-maps';


/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

	@ViewChild('map') mapRef: ElementRef;
	map: any;
Name
Quan
Location
PhoneNumber

PetFoodOrder
key
  constructor(public navCtrl: NavController, public navParams: NavParams) {

       this.Name= this.navParams.get('pending_name');
   this.Location= this.navParams.get('pending_location');
       this.PhoneNumber= this.navParams.get('pending_mobilenumber');
       this.PetFoodOrder= this.navParams.get('pending_petfood');
        this.Quan = this.navParams.get('pending_quantity');           
        this.key = this.navParams.get('pending_key');
console.log(this.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
     console.log(this.mapRef);

this.showMap();
  }



  showMap(){
  	const location = new google.maps.LatLng(7.2539602,125.1708687);
  	const options = { center: location, zoom: 10}

  	this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

Calculate(){


  let data = {
    pending_name : this.Name,
    pending_location : this.Location,
    pending_mobilenumber : this.PhoneNumber,
    pending_petfood : this.PetFoodOrder,

    pending_quantity : this.Quan,
    pending_key : this.key
  }
  this.navCtrl.push(TotalPaymentPage,data);
}

/*
  initMap(){
  	var directionsService= new google.maps.DirectionsService;
  	var directionsDisplay = new google.maps.DirectionsRenderer;

  	this.map = new google.maps.Map(this.mapRef.nativeElement, {
  		zoom: 7,
  		center: {lat: 7.25, lng: 125.17}
  	});
  	directionsDisplay.setMap(this.map);
this.calculateAndDisplayRoute(directionsService,directionsDisplay);


  }
  calculateAndDisplayRoute(directionsService, directionsDisplay){
  	directionsService.route({
origin: 'chicago, il',
destination: 'los angeles, ca',
travelMode: 'DRIVING'

  	}, function(response, status){
  		if(status === 'OK'){
  			directionsDisplay.setDirections(response);
  		}else{
  			window.alert('Directions request failed due to ' + status);
  		}
  	}

  	);
  }*/

}
