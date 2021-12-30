import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesEvenementsCreesPageRoutingModule } from './mes-evenements-crees-routing.module';

import { MesEvenementsCreesPage } from './mes-evenements-crees.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,TranslateModule,
    MesEvenementsCreesPageRoutingModule
  ],
  declarations: [MesEvenementsCreesPage]
})
export class MesEvenementsCreesPageModule {}
