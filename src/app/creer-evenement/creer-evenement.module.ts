import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerEvenementPageRoutingModule } from './creer-evenement-routing.module';

import { CreerEvenementPage } from './creer-evenement.page';
import { AgmCoreModule } from '@agm/core';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApm82MFXMcROWrHaGTj-auUcyOYQwBwsE',
      libraries: ['places']
    }),
    CreerEvenementPageRoutingModule
  ],
  declarations: [CreerEvenementPage]
})
export class CreerEvenementPageModule {}
