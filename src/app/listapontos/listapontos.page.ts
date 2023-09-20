import { Component, OnInit } from '@angular/core';
import { PontosDeColeta } from './models/pontos-de-coleta';
import { PontosDeColetaService } from './services/pontos-de-coleta.service';
import { ProcurapontoPage } from '../procuraponto/procuraponto.page';



@Component({
  selector: 'app-listapontos',
  templateUrl: './listapontos.page.html',
  styleUrls: ['./listapontos.page.scss'],
})

export class ListapontosPage implements OnInit {

  ponto = {} as PontosDeColeta;
  pontos: PontosDeColeta[] |undefined
  getPontoFiltro: any;

  bd = [
    {
        "id": "1",
        "categoria": "Eletrônico",
        "nome": "E-letro",
        "endereco": "Rua Ermelindo Leão",
        "numero": "385",
        "telefone": "(43) 3339-0475",
        "cidade": "Londrina"
    },
    {
        "id": "2",
        "categoria": "Eletrônico",
        "nome": "Prefeitura de Rolandia",
        "endereco": "Rua cambe",
        "numero": "0",
        "telefone": null,
        "cidade": ""
    }
];

  constructor (
    private pontosColetaService: PontosDeColetaService) {}

  ngOnInit() {
    this.getPontoFilter();


    // this.getPontoByCategoria();
    // this.mostraLista();
  }

  getPontoFilter(){ //filtro funcionando porém somente no console. Necessita habilitar no ngOnINit
    this.getPontoFiltro = this.bd.filter(function (filtro) {
     return filtro.categoria == 'opcaoCategoria'
    })}

  // getPontoByCategoria(){ //está funcionando porém não é possivel fazer o filtro
  //   this.pontosColetaService.getPontoByCategoria().subscribe((pontos: PontosDeColeta[]) =>
  //     this.pontos = pontos)
  // }

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