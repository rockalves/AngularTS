import { Component, OnInit  } from '@angular/core';
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
  public resposta: string = ''

  public rodada: number = 0
  rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
    //console.log((<HTMLInputElement>resposta.target).value);
    //Obtem o valor completo do input.
  }
  public verificarResposta(): void {
    console.log(this.tentativas)
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta!')
      //Trocar pergunta da rodada;
      this.rodada++

      //Evolui barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      

      //Atualiza o objeto rodadaFrase
      this.atualizaRodada()
    } else {
      //decrementa valor da variavel e tentativas ao errar a resposta
      this.tentativas--

  
      if (this.tentativas === -1 ){
        alert('Você perdeu todas as tentativas')
      }
    }
 
    //console.log('Verificar resposta: ', this.resposta)
  }
  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    
    //limpar a resposta
    this.resposta = ''
  }
}
