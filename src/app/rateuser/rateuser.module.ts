import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateuserPageRoutingModule } from './rateuser-routing.module';

import { RateuserPage } from './rateuser.page';
import { IonicRatingModule } from 'ionic4-rating';

@NgModule({
  imports: [
    CommonModule,IonicRatingModule,
    FormsModule,
    IonicModule,
    RateuserPageRoutingModule
  ],
  declarations: [RateuserPage]
})
export class RateuserPageModule {}
