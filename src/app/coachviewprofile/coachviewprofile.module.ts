import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachviewprofilePageRoutingModule } from './coachviewprofile-routing.module';

import { CoachviewprofilePage } from './coachviewprofile.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachviewprofilePageRoutingModule,TranslateModule
  ],
  declarations: [CoachviewprofilePage]
})
export class CoachviewprofilePageModule {}
