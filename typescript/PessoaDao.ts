import {DaoInterface} from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface{
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean{
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean{
        console.log('lógica update')
        return true
    }

    remover(id:number ): Pessoa{
        console.log('lógica de delete')
        return new Pessoa('','')
    }

    selecionar(id: number): any{
        console.log('Lógica de select')
        return new Pessoa('','')
    }

    selecionarTodos(): [any]{
        console.log('logica getAll')
        return [new Pessoa('','')]
    }
}