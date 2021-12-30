import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonProfilPageRoutingModule } from './mon-profil-routing.module';

import { MonProfilPage } from './mon-profil.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,TranslateModule,
    IonicModule,
    MonProfilPageRoutingModule
  ],
  declarations: [MonProfilPage]
})
export class MonProfilPageModule {}
