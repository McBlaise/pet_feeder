import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPetFoodPage } from './order-pet-food';

@NgModule({
  declarations: [
    OrderPetFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPetFoodPage),
  ],
})
export class OrderPetFoodPageModule {}
