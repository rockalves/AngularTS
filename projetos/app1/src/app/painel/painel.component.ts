import { Component, OnInit } from '@angular/core';
import {Frase } from '../shared/frase.model'
import {FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  
  public instrucao : string = 'Traduza a frase:'
  public frases : Frase[] = FRASES //Instancia do array de frases, passando como atributo o mock (enum) de frases

  constructor() {console.log(this.frases) } //loga o array de frases

  ngOnInit() {
  }

  public atualizaResposta():void{
    console.log("<- Qtd evento input - Teste")
  }


}
