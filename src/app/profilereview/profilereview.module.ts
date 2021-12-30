import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilereviewPageRoutingModule } from './profilereview-routing.module';

import { ProfilereviewPage } from './profilereview.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    ProfilereviewPageRoutingModule
  ],
  declarations: [ProfilereviewPage]
})
export class ProfilereviewPageModule {}
