import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { OrderPetFoodPage } from '../pages/order-pet-food/order-pet-food';
import { UserProductListPage } from '../pages/user-product-list/user-product-list';
import { CustomerRequestPage } from '../pages/customer-request/customer-request';
import { PendingOrdersPage } from '../pages/pending-orders/pending-orders';
import { ProductPage } from '../pages/product/product';
import { ProductListPage } from '../pages/product-list/product-list';
import { RegisterPage } from '../pages/register/register';
import { TotalPaymentPage } from '../pages/total-payment/total-payment';

import { TransactionCompletesPage } from '../pages/transaction-completes/transaction-completes';
import { MapsPage } from '../pages/maps/maps';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UpdateProductPage } from '../pages/update-product/update-product';
import { FeedingHistoryPage } from '../pages/feeding-history/feeding-history';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SMS } from '@ionic-native/sms';
import { AndroidPermissions } from '@ionic-native/android-permissions';

var firebaseconfig = 
{
  apiKey: "AIzaSyBf_EQ7AaFZh3kGwy3g2ZcUbdINmS72Mj0",
    authDomain: "pet-feeder-5940a.firebaseapp.com",
    databaseURL: "https://pet-feeder-5940a.firebaseio.com",
    projectId: "pet-feeder-5940a",
    storageBucket: "pet-feeder-5940a.appspot.com",
    messagingSenderId: "939665531486"
}


@NgModule({
  declarations: [
    MyApp,
    TotalPaymentPage,
    MapsPage,
    FeedingHistoryPage,
    OrderPetFoodPage,
    CustomerRequestPage,
    PendingOrdersPage,
    ProductPage,
    UserProductListPage,
    ProductListPage,
    HomePage,
    UpdateProductPage,
    ListPage,
    RegisterPage,
    LoginPage,
    TransactionCompletesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TotalPaymentPage,
    MapsPage,
    FeedingHistoryPage,
    OrderPetFoodPage,
    UpdateProductPage,
    TransactionCompletesPage,
    CustomerRequestPage,
    PendingOrdersPage,
    ProductPage,
    ProductListPage,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    UserProductListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SMS,
    AndroidPermissions
  ]
})
export class AppModule {}
