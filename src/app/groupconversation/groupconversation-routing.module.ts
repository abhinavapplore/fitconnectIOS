import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupconversationPage } from './groupconversation.page';

const routes: Routes = [
  {
    path: '',
    component: GroupconversationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupconversationPageRoutingModule {}
