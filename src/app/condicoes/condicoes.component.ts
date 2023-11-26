import { Component, OnInit } from '@angular/core';
import { CondicoesService } from '../service/condicoes.service';
import { Condicao } from '../model/condicao.model';

@Component({
  selector: 'app-condicoes',
  templateUrl: './condicoes.component.html',
  styleUrls: ['./condicoes.component.css']
})
export class CondicoesComponent implements OnInit {

panelOpenState = false;
condicoes : Condicao[] = [];
selectedCondicao?: Condicao;


  constructor(private condicoesService: CondicoesService){}

  ngOnInit(): void {
    this.getCondicoes('');
  }

  getCondicoes(name: string){
    this.condicoesService.getCondicoes().subscribe(
      condicoes => this.condicoes = condicoes.filter(condicao => (condicao.name.includes(name)))
    )
  }

  onSelect(condicao: Condicao):void{
    this.selectedCondicao = condicao;
  }
}
