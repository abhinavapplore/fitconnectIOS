import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreescoachPageRoutingModule } from './creescoach-routing.module';

import { CreescoachPage } from './creescoach.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreescoachPageRoutingModule,TranslateModule
  ],
  declarations: [CreescoachPage]
})
export class CreescoachPageModule {}
