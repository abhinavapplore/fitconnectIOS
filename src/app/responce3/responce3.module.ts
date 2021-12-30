import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Responce3PageRoutingModule } from './responce3-routing.module';

import { Responce3Page } from './responce3.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    Responce3PageRoutingModule
  ],
  declarations: [Responce3Page]
})
export class Responce3PageModule {}
