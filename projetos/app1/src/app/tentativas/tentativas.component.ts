import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  
  @Input() public tentativas: number

  public coracoes: Coracao[] =[
    new Coracao(true), new Coracao(true),new Coracao(true)
  ]
  constructor() { 
    console.log(this.coracoes)
    
  }

  ngOnInit() {

  }
  ngOnChanges(){
    //this.tentativas Numero de tentativas
    //this.coracoes.length Tamanho do array de coracoes
    //no trecho abaixo, realizamos a comparacao entre o numero de tentativas, 
    // com o tamanho do array de coracoes, caso seja diferente atribui o valor do indice 
    // com a subtracao do tamanho do array de coracoes pelo numero de tentativas restantes
    // onde o caminho da imagem sera alterado de acordo com a posicao do array de coracoes
    // atribuida pelo indice 
    if (this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      // 3 - 2 = 1 
      this.coracoes[indice - 1].cheio = false;
    }

    console.log('tentativas recebidas do painel ngOnChanges: ',this.tentativas)
  }
}
