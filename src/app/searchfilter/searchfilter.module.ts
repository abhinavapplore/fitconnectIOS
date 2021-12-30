import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchfilterPageRoutingModule } from './searchfilter-routing.module';

import { SearchfilterPage } from './searchfilter.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    SearchfilterPageRoutingModule
  ],
  declarations: [SearchfilterPage]
})
export class SearchfilterPageModule {}
