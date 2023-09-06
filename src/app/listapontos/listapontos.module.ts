import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapontosPageRoutingModule } from './listapontos-routing.module';

import { ListapontosPage } from './listapontos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapontosPageRoutingModule
  ],
  declarations: [ListapontosPage]
})
export class ListapontosPageModule {}
