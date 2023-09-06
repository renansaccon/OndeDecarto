import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sugest',
  templateUrl: './sugest.page.html',
  styleUrls: ['./sugest.page.scss'],
})

export class SugestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  produto:String="";
  ponto:String="";
  endereco:String="";
  cidadeestado:String="";
  telefone:String="";

}
