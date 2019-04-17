import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedingHistoryPage } from './feeding-history';

@NgModule({
  declarations: [
    FeedingHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedingHistoryPage),
  ],
})
export class FeedingHistoryPageModule {}
