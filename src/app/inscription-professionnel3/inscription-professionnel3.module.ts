import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionProfessionnel3PageRoutingModule } from './inscription-professionnel3-routing.module';

import { InscriptionProfessionnel3Page } from './inscription-professionnel3.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    InscriptionProfessionnel3PageRoutingModule
  ],
  declarations: [InscriptionProfessionnel3Page]
})
export class InscriptionProfessionnel3PageModule {}
