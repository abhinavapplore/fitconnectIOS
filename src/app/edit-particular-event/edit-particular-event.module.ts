import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditParticularEventPageRoutingModule } from './edit-particular-event-routing.module';

import { EditParticularEventPage } from './edit-particular-event.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditParticularEventPageRoutingModule,
  ],
  declarations: [EditParticularEventPage],
})
export class EditParticularEventPageModule {}
