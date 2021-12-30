import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionProfessionnelPageRoutingModule } from './inscription-professionnel-routing.module';

import { InscriptionProfessionnelPage } from './inscription-professionnel.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    InscriptionProfessionnelPageRoutingModule,
    Ng2SearchPipeModule,
    TranslateModule
    
  ],
  entryComponents: [
  
    
],
  declarations: [InscriptionProfessionnelPage]
})
export class InscriptionProfessionnelPageModule {}
