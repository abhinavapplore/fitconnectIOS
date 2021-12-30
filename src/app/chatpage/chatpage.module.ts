import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatpagePageRoutingModule } from './chatpage-routing.module';

import { ChatpagePage } from './chatpage.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatpagePageRoutingModule,TranslateModule
  ],
  declarations: [ChatpagePage]
})
export class ChatpagePageModule {}
