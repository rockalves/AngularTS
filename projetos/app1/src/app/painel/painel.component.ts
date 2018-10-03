import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase:'
  public frases: Frase[] = FRASES //Instancia do array de frases, passando como atributo o mock (enum) de frases
  public resposta: string

  public rodada: number = 0
  rodadaFrase: Frase

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  } //loga o array de frases

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
    //console.log((<HTMLInputElement>resposta.target).value);
    //Obtem o valor completo do input.

  }
  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta!')
      //Trocar pergunta da rodada;
      this.rodada++
      
      //Atualiza o objeto rodaddaFrase
      this.rodadaFrase = this.frases[this.rodada]
      
    } else {
      alert('A tradução está errada!')
    }

    //console.log('Verificar resposta: ', this.resposta)
  }

}
