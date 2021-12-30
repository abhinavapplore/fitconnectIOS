import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentpagePageRoutingModule } from './paymentpage-routing.module';

import { PaymentpagePage } from './paymentpage.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    PaymentpagePageRoutingModule
  ],
  declarations: [PaymentpagePage]
})
export class PaymentpagePageModule {}
