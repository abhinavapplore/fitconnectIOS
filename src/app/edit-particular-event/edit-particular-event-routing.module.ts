import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditParticularEventPage } from './edit-particular-event.page';

const routes: Routes = [
  {
    path: '',
    component: EditParticularEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditParticularEventPageRoutingModule {}
