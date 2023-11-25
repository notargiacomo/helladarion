import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Condicao } from '../model/condicao.model';
import { CONDICOES } from '../repository/condicao.repository';

@Injectable({
  providedIn: 'root'
})
export class CondicoesService {

  constructor() { }

  getCondicoes(): Observable<Condicao[]> {
    const condicoes = of(CONDICOES);
    return condicoes;
  }
}
