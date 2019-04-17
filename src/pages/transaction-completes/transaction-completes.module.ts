import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionCompletesPage } from './transaction-completes';

@NgModule({
  declarations: [
    TransactionCompletesPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionCompletesPage),
  ],
})
export class TransactionCompletesPageModule {}
