import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilActivitePageRoutingModule } from './profil-activite-routing.module';

import { ProfilActivitePage } from './profil-activite.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,TranslateModule,
    IonicModule,
    ProfilActivitePageRoutingModule
  ],
  declarations: [ProfilActivitePage]
})
export class ProfilActivitePageModule {}
