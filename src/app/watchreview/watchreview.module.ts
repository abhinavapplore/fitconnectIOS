import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchreviewPageRoutingModule } from './watchreview-routing.module';

import { WatchreviewPage } from './watchreview.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,TranslateModule,
    FormsModule,
    IonicModule,
    WatchreviewPageRoutingModule
  ],
  declarations: [WatchreviewPage]
})
export class WatchreviewPageModule {}
