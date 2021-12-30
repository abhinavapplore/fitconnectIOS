import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupconversationPageRoutingModule } from './groupconversation-routing.module';

import { GroupconversationPage } from './groupconversation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupconversationPageRoutingModule
  ],
  declarations: [GroupconversationPage]
})
export class GroupconversationPageModule {}
