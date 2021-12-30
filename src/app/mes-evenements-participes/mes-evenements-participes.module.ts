import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesEvenementsParticipesPageRoutingModule } from './mes-evenements-participes-routing.module';

import { MesEvenementsParticipesPage } from './mes-evenements-participes.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,TranslateModule,
    IonicModule,
    MesEvenementsParticipesPageRoutingModule
  ],
  declarations: [MesEvenementsParticipesPage]
})
export class MesEvenementsParticipesPageModule {}
