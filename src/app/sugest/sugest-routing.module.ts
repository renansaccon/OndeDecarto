import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugestPage } from './sugest.page';

const routes: Routes = [
  {
    path: '',
    component: SugestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugestPageRoutingModule {}
