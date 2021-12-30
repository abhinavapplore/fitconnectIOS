import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionProfessionnel2PageRoutingModule } from './inscription-professionnel2-routing.module';

import { InscriptionProfessionnel2Page } from './inscription-professionnel2.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,TranslateModule,
    IonicModule,
    InscriptionProfessionnel2PageRoutingModule
  ],
  declarations: [InscriptionProfessionnel2Page]
})
export class InscriptionProfessionnel2PageModule {}
