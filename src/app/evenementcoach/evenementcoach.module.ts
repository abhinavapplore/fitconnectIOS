import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EvenementcoachPageRoutingModule } from './evenementcoach-routing.module';

import { EvenementcoachPage } from './evenementcoach.page';
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
    EvenementcoachPageRoutingModule
  ],
  declarations: [EvenementcoachPage]
})
export class EvenementcoachPageModule {}
