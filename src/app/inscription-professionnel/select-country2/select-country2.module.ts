import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCountry2PageRoutingModule } from './select-country2-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SelectCountry2Page } from './select-country2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,Ng2SearchPipeModule,
    SelectCountry2PageRoutingModule
  ],
  declarations: [SelectCountry2Page]
})
export class SelectCountry2PageModule {}
