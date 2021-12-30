import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonProfilActivitePageRoutingModule } from './mon-profil-activite-routing.module';

import { MonProfilActivitePage } from './mon-profil-activite.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,TranslateModule,
    MonProfilActivitePageRoutingModule
  ],
  declarations: [MonProfilActivitePage]
})
export class MonProfilActivitePageModule {}
