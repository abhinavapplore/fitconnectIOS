import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvenementcoachvuePageRoutingModule } from './evenementcoachvue-routing.module';

import { EvenementcoachvuePage } from './evenementcoachvue.page';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,TranslateModule,
    
    EvenementcoachvuePageRoutingModule
  ],
  declarations: [EvenementcoachvuePage]
})
export class EvenementcoachvuePageModule {}
