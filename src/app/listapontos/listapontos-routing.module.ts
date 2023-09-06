import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapontosPage } from './listapontos.page';

const routes: Routes = [
  {
    path: '',
    component: ListapontosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapontosPageRoutingModule {}
