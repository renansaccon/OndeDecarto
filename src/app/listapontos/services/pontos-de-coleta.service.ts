import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PontosDeColeta } from '../models/pontos-de-coleta';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PontosDeColetaService {
  // url = '../assets/data/db.json';
  testeCategoria:any;

  url = 'http://localhost:3000/pontosColeta'; //url conexão banco de dados

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }


  getPontoByCategoria(): Observable<PontosDeColeta[]>{
    return this.httpClient.get<PontosDeColeta[]>(this.url);
      // .pipe (
      //   retry(2), catchError(this.handleError))
  }

  // getPontoByCategoria(categoria: string): Observable<PontosDeColeta>{
  //   return this.httpClient.get<PontosDeColeta>(this.url + '/' + categoria)
  //     .pipe (
  //       retry(2), catchError(this.handleError))
  // }

  // handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = error.error.message;
  //   } else {
  //     // Erro ocorreu no lado do servidor
  //     errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // };
}
