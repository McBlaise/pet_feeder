import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home'; 

import { LoginPage } from '../pages/login/login';

import { OrderPetFoodPage } from '../pages/order-pet-food/order-pet-food';
import { CustomerRequestPage } from '../pages/customer-request/customer-request';
import { PendingOrdersPage } from '../pages/pending-orders/pending-orders';
import { ProductPage } from '../pages/product/product';
import { ProductListPage } from '../pages/product-list/product-list';

import { TransactionCompletesPage } from '../pages/transaction-completes/transaction-completes';
import { UserProductListPage } from '../pages/user-product-list/user-product-list';
import { MapsPage } from '../pages/maps/maps';
import { FeedingHistoryPage } from '../pages/feeding-history/feeding-history';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
usersRef : any[]
UserName

  pages: Array<{title: string, component: any}>;

  constructor(  public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
                private afauth: AngularFireAuth, private database: AngularFireDatabase) {
    this.initializeApp();
 


    // used for an example of ngFor and navigation
   
   this.database.list('Accounts').snapshotChanges().pipe (
      map (changes => changes.map(c =>({ key: c.payload.key, ...c.payload.val() })))

      ).subscribe( account => {
        this.usersRef = account


        this.afauth.authState.subscribe( data => {
          if(!data) {}
            else{
              this.usersRef = account;
              for ( let items of this.usersRef){
                  if ( items.Account_Email.toLowerCase() == data.email && items.Account_Type == 'Admin'){

                    this.UserName = items.Account_Name;
                     this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Customer Request', component: CustomerRequestPage },
      { title: 'Order Pet Food', component: OrderPetFoodPage },
      { title: 'Pending Orders', component: PendingOrdersPage },
      { title: 'Maps', component: MapsPage },
      { title: 'Feeding History', component: FeedingHistoryPage },
      { title: 'Product List', component: ProductListPage },
      { title: 'Add Product', component: ProductPage },
       {title: 'Completed Transactions', component: TransactionCompletesPage},
      { title: 'Logout', component: LoginPage }
    ];

    break
  }else if(items.Account_Email.toLowerCase() == data.email && items.Account_Type == 'User'){
    
                    this.UserName = items.Account_Name;
this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Order Pet Food', component: OrderPetFoodPage },
      { title: 'Feeding History', component: FeedingHistoryPage },
      { title: 'Product List', component: UserProductListPage },
      { title: 'Logout', component: LoginPage }
    ];
    break
  }


              }
            }
        })
      });
  




  }
  OpenReg(){
    this.nav.setRoot(ProductListPage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
