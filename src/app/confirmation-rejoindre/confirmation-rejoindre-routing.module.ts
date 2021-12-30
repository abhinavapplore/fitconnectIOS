import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationRejoindrePage } from './confirmation-rejoindre.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationRejoindrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationRejoindrePageRoutingModule {}
