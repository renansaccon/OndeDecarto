import { Component, OnInit } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular';
import { ListapontosPage } from '../listapontos/listapontos.page';

@Component({
  selector: 'app-procuraponto',
  templateUrl: './procuraponto.page.html',
  styleUrls: ['./procuraponto.page.scss'],
})
export class ProcurapontoPage implements OnInit {

  opcaoCategoria="";
  product="";
  funcionamento="";

  constructor() {
  }



  ngOnInit() {
  }

}
