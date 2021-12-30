import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSportifsPageRoutingModule } from './map-sportifs-routing.module';

import { MapSportifsPage } from './map-sportifs.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    MapSportifsPageRoutingModule
  ],
  declarations: [MapSportifsPage]
})
export class MapSportifsPageModule {}
