import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowlistPageRoutingModule } from './followlist-routing.module';

import { FollowlistPage } from './followlist.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowlistPageRoutingModule,TranslateModule
  ],
  declarations: [FollowlistPage]
})
export class FollowlistPageModule {}
