import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface{
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean{
        console.log('lógica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean{
        console.log('lógica update')
        return true
    }

    remover(id:number ): Concessionaria{
        console.log('lógica de delete')
        return new Concessionaria('',[])
    }

    selecionar(id: number): any{
        console.log('Lógica de select')
        return new Concessionaria('',[])
    }

    selecionarTodos(): [any]{
        console.log('logica getAll')
        return [new Concessionaria('',[])]
    }

}