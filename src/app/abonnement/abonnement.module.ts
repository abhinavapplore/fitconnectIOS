import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { IonicModule } from '@ionic/angular';

import { AbonnementPageRoutingModule } from './abonnement-routing.module';

import { AbonnementPage } from './abonnement.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonnementPageRoutingModule,TranslateModule
  ],
  declarations: [AbonnementPage]
})
export class AbonnementPageModule {}
