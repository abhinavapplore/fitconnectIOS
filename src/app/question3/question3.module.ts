import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question3PageRoutingModule } from './question3-routing.module';

import { Question3Page } from './question3.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,TranslateModule,
    IonicModule,
    Question3PageRoutingModule
  ],
  declarations: [Question3Page]
})
export class Question3PageModule {}
