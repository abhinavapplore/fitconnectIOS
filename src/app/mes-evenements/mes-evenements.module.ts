import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesEvenementsPageRoutingModule } from './mes-evenements-routing.module';

import { MesEvenementsPage } from './mes-evenements.page';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,TranslateModule,
    MesEvenementsPageRoutingModule
  ],
  declarations: [MesEvenementsPage]
})
export class MesEvenementsPageModule {}
