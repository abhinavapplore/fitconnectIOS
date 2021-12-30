import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question2PageRoutingModule } from './question2-routing.module';

import { Question2Page } from './question2.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    Question2PageRoutingModule
  ],
  declarations: [Question2Page]
})
export class Question2PageModule {}
