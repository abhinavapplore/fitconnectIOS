import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvenementsCoachPageRoutingModule } from './evenements-coach-routing.module';

import { EvenementsCoachPage } from './evenements-coach.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,TranslateModule,
   
    EvenementsCoachPageRoutingModule
  ],
  declarations: [EvenementsCoachPage]
})
export class EvenementsCoachPageModule {}
