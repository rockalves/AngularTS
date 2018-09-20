import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = ''

    inserir(object: T): boolean{
        console.log('lógica de insert')
        return true
    }

    atualizar(object: T): boolean{
        console.log('lógica update')
        return true
    }

    remover(id:number ): T{
        console.log('lógica de delete')
        return Object()
    }

    selecionar(id: number): T{
        console.log('Lógica de select')
        return Object()
    }

    selecionarTodos(): [T]{
        console.log('logica getAll')
        return [Object()]
    }
}