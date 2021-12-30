import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsPracticePageRoutingModule } from './sports-practice-routing.module';

import { SportsPracticePage } from './sports-practice.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    SportsPracticePageRoutingModule,
  ],
  declarations: [SportsPracticePage],
})
export class SportsPracticePageModule {}
