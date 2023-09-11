import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { suggestPage } from './suggest.page';

const routes: Routes = [
  {
    path: '',
    component: suggestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class suggestPageRoutingModule {}
