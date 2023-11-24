import { Component, OnInit } from '@angular/core';
import { PontosDeColeta } from './models/pontos-de-coleta';
import { PontosDeColetaService } from './services/pontos-de-coleta.service';
import { opcaoCategoria } from '../procuraponto/procuraponto.page';

@Component({
  selector: 'app-listapontos',
  templateUrl: './listapontos.page.html',
  styleUrls: ['./listapontos.page.scss'],
})

export class ListapontosPage implements OnInit {

  ponto = {} as PontosDeColeta;
  pontos: PontosDeColeta[] |undefined
  getPontoFiltro: any;
  categoria = opcaoCategoria;


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
        "nome": "Green Eletron",
        "endereco": "Avenida Alexandre Santoro",
        "numero": "590",
        "telefone": null,
        "cidade": "Londrina"
    },
    {
      "id": "3",
      "categoria": "Lâmpadas",
      "nome": "Supermercados Musamar",
      "endereco": "Rua Pernambuco",
      "numero": "784",
      "telefone": "(43) 3324-0020",
      "cidade": "Londrina"
    },
    {
      "id": "4",
      "categoria": "Lâmpadas",
      "nome": "Rede Mercados Muffato",
      "endereco": "Av. Juscelino Kubitschek",
      "numero": "2606",
      "telefone": "(43) 2103-9950",
      "cidade": "Londrina"
    },
    {
      "id": "5",
      "categoria": "Pilhas",
      "nome": "Hayamax Distribuidora de Produtos Eletrônicos",
      "endereco": "Rua Senador Souza Naves",
      "numero": "9",
      "telefone": "(43) 3377-6800",
      "cidade": "Londrina"
    },
    {
      "id": "6",
      "categoria": "Pilhas",
      "nome": "Leroy Merlin",
      "endereco": "Avenida Theodoro Victorelli",
      "numero": "60",
      "telefone": "0800 020 5376",
      "cidade": "Londrina"
    },
    {
      "id": "7",
      "categoria": "Pilhas",
      "nome": "Kalunga",
      "endereco": "Avenida Theodoro Victorelli",
      "numero": "150",
      "telefone": "(11) 3346-9966",
      "cidade": "Londrina"
    },
    {
      "id": "8",
      "categoria": "Pilhas",
      "nome": "E-letro",
      "endereco": "Rua Ermelindo Leão",
      "numero": "385",
      "telefone": "(43) 3339-0475",
      "cidade": "Londrina"
    },
    {
      "id": "9",
      "categoria": "Pilhas",
      "nome": "Eletrônica Valtech Ltda",
      "endereco": "Rua Belo Horizonte",
      "numero": "117",
      "telefone": "(43) 3321-0077",
      "cidade": "Londrina"
    },
    {
      "id": "10",
      "categoria": "Madeira",
      "nome": "Ponto de Entrega Voluntária",
      "endereco": "Rua Capitão João Busse",
      "numero": "1274-1466",
      "telefone": "(43) 3379-7900",
      "cidade": "Londrina"
    },
    {
      "id": "11",
      "categoria": "Madeira",
      "nome": "Ponto de Entrega Voluntária",
      "endereco": "Rua Helmuth Fischer",
      "numero": " S/N",
      "telefone": "--",
      "cidade": "Londrina"
    },
    {
      "id": "12",
      "categoria": "Pneu",
      "nome": "Adriano de Almeida Pneus Ltda",
      "endereco": "Rua Amélia Riskallah Abib Tauil",
      "numero": "1337",
      "telefone": "(43) 3367-5071",
      "cidade": "Londrina"
    },
    {
      "id": "13",
      "categoria": "Pneu",
      "nome": "Engesol Engenharia e Soluções Ltda",
      "endereco": "Rua Grafita",
      "numero": "563",
      "telefone": "(43) 99622-4853 / (43) 9829-4889",
      "cidade": "Londrina"
    },
    {
      "id": "14",
      "categoria": "Entulho",
      "nome": "Ponto de Entrega Voluntária",
      "endereco": "Rua Capitão João Busse",
      "numero": "1274-1466",
      "telefone": "(43) 3379-7900",
      "cidade": "Londrina"
    },
    {
      "id": "15",
      "categoria": "Entulho",
      "nome": "Ponto de Entrega Voluntária",
      "endereco": "Rua Helmuth Fischer",
      "numero": " S/N",
      "telefone": "--",
      "cidade": "Londrina"
    },
    {
      "id": "16",
      "categoria": "Medicamentos",
      "nome": "Farmácia Nissei",
      "endereco": "Av. Tiradentes",
      "numero": "220",
      "telefone": "4004-4041",
      "cidade": "Londrina"
    },
    {
      "id": "17",
      "categoria": "Medicamentos",
      "nome": "Farmácia Nissei",
      "endereco": "Av. Higienópolis",
      "numero": "1198",
      "telefone": "4004-4041",
      "cidade": "Londrina"
    },
    {
      "id": "17",
      "categoria": "Medicamentos",
      "nome": "Farmácia Droga Raia",
      "endereco": "Rua São Pedro",
      "numero": "380",
      "telefone": "(43) 99176-4018",
      "cidade": "Londrina"
    },
    {
      "id": "18",
      "categoria": "Medicamentos",
      "nome": "Farmácia Vale Verde",
      "endereco": "Av. Arthur Thomas",
      "numero": "1100",
      "telefone": "(43) 3379-0001",
      "cidade": "Londrina"
    },
    {
      "id": "18",
      "categoria": "Medicamentos",
      "nome": "Farmácia Phloraceae",
      "endereco": "Av. Senador Souza Naves",
      "numero": "929",
      "telefone": "(43) 3379-0001",
      "cidade": "Londrina"
    },
    {
      "id": "19",
      "categoria": "Óleo Doméstico",
      "nome": "Cáritas Arquidiocesana de Londrina",
      "endereco": "Rua Dom Bosco",
      "numero": "145",
      "telefone": "(43) 3338-7252",
      "cidade": "Londrina"
    },
  ];

  constructor (
    private pontosColetaService: PontosDeColetaService) {}
    

  ngOnInit() {
    this.getPontoFilter();


    // this.getPontoByCategoria();
    // this.mostraLista();
  }

  getPontoFilter(){
    this.getPontoFiltro = this.bd.filter(function (filtro) {
     return filtro.categoria == opcaoCategoria;
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