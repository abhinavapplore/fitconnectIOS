import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationRejoindrePageRoutingModule } from './confirmation-rejoindre-routing.module';

import { ConfirmationRejoindrePage } from './confirmation-rejoindre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationRejoindrePageRoutingModule
  ],
  declarations: [ConfirmationRejoindrePage]
})
export class ConfirmationRejoindrePageModule {}
