import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InscriptionParticulierPageRoutingModule } from './inscription-particulier-routing.module';
import { InscriptionParticulierPage } from './inscription-particulier.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,TranslateModule,
    InscriptionParticulierPageRoutingModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [
    
    
],
  declarations: [InscriptionParticulierPage]
})
export class InscriptionParticulierPageModule {}
