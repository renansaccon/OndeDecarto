import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listapontos',
  templateUrl: './listapontos.page.html',
  styleUrls: ['./listapontos.page.scss'],
})

export class ListapontosPage {

  
  pontosColeta= new Array;

  constructor(private http:HttpClient){
  }

  mostraLista(){
    this.pontosColeta=[];
    this.http.get<any[]>("http://localhost/extensao/consulta.php")
                  .subscribe(valor => {valor.forEach(dados => {
                    this.pontosColeta.push(dados.nome,dados.endereco,dados.numero,dados.telefone,dados.cidade);
                  })
                })
  }

  ngOnInit() {
    this.mostraLista();
  };
}