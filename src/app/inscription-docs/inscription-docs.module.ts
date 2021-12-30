import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionDocsPageRoutingModule } from './inscription-docs-routing.module';

import { InscriptionDocsPage } from './inscription-docs.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionDocsPageRoutingModule,TranslateModule
  ],
  declarations: [InscriptionDocsPage]
})
export class InscriptionDocsPageModule {}
