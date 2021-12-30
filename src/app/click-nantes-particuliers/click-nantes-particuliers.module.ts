import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClickNantesParticuliersPageRoutingModule } from './click-nantes-particuliers-routing.module';

import { ClickNantesParticuliersPage } from './click-nantes-particuliers.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClickNantesParticuliersPageRoutingModule,TranslateModule
  ],
  declarations: [ClickNantesParticuliersPage]
})
export class ClickNantesParticuliersPageModule {}
