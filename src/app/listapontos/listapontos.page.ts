import { Component, OnInit } from '@angular/core';
import { PontosDeColeta } from './models/pontos-de-coleta';
import { PontosDeColetaService } from './services/pontos-de-coleta.service';


@Component({
  selector: 'app-listapontos',
  templateUrl: './listapontos.page.html',
  styleUrls: ['./listapontos.page.scss'],
})

export class ListapontosPage implements OnInit {

  ponto = {} as PontosDeColeta;
  pontos: PontosDeColeta[] |undefined
  
  // pontosColeta= Array[0];

  constructor (private pontosDeColeta: PontosDeColetaService) {}

  ngOnInit() {
    this.getPontoByCategoria()
    // this.mostraLista();
  }

  getPontoByCategoria(){
    this.pontosDeColeta.getPontoByCategoria().subscribe((pontos: PontosDeColeta[]) => {
      this.pontos = pontos;
    });
  }

  // ngOnInit() {
  //   this.pontosDeColeta.getPontoByCategoria('Eletronico')
  //   // this.mostraLista();
  // }

  // getPontoByCategoria(categoria: string){
  //   this.pontosDeColeta.getPontoByCategoria(categoria).subscribe((pontoColeta: PontosDeColeta) => {
  //     this.pontos = pontoColeta;
  //   });
  // }

// --------------------------------------------------------------------------------


  // constructor(private http:HttpClient){}

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  // }

  // mostraLista(){
  //   this.pontosColeta = [];
  //     return this.http.get<any>("http://localhost/extensao/consulta.php")
  //       .subscribe(valor => this.pontosColeta = valor)};

  // mostraLista(){
  //   this.pontosColeta=[];
  //   return this.http.get<PontosDeColeta>("http://localhost/extensao/consulta.php")
  //                 .subscribe(valor => {valor.forEach(dados => {
  //                   this.pontosColeta.push(dados.id,dados.categoria,dados.nome,dados.endereco,dados.numero,dados.telefone,dados.cidade);
  //                 })
  //               })
  // }


}