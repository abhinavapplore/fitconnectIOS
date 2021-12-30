import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoacheditprofilePageRoutingModule } from './coacheditprofile-routing.module';

import { CoacheditprofilePage } from './coacheditprofile.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoacheditprofilePageRoutingModule,TranslateModule
  ],
  declarations: [CoacheditprofilePage]
})
export class CoacheditprofilePageModule {}
