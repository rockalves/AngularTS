import {DaoInterface} from './DaoInterface'
import Carro from './Carro'

export class CarroDao implements DaoInterface{
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Carro): boolean{
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Carro): boolean{
        console.log('lógica update')
        return true
    }

    remover(id:number ): Carro{
        console.log('lógica de delete')
        return new Carro('',3)
    }

    selecionar(id: number): any{
        console.log('Lógica de select')
        return new Carro('',3)
    }

    selecionarTodos(): [any]{
        console.log('logica getAll')
        return [new Carro('',3)]
    }

}