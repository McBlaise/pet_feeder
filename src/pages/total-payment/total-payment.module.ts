import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalPaymentPage } from './total-payment';

@NgModule({
  declarations: [
    TotalPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalPaymentPage),
  ],
})
export class TotalPaymentPageModule {}
