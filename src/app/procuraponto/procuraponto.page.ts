import { Component, OnInit } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular';
import { ListapontosPage } from '../listapontos/listapontos.page';

export let opcaoCategoria: "";

@Component({
  selector: 'app-procuraponto',
  templateUrl: './procuraponto.page.html',
  styleUrls: ['./procuraponto.page.scss'],
})


export class ProcurapontoPage implements OnInit {


  product="";
  funcionamento="";
  x= "";

  constructor() {

  }

  // categoria(){
  //   this.x = document.getElementById("categoria");
  //   return console.log(this.x);
  // }
  
  
  categoria(opcao){
    opcaoCategoria = opcao;
    return console.log(opcaoCategoria);
  }


  ngOnInit() {
  }

}
