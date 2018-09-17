import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/*-- Criar carros----*/
let carroA = new Carro('Tucson', 5)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Santana', 4)

/*-- Montar lista de carros da concessionária---*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Rua das Papoulas, 451', listaDeCarros)

/**Exibir lista de carros */
//console.log(concessionaria.mostrarListaDeCarros())


/** --Comprar o carro */
let cliente = new Pessoa('André', 'Tucson')
//console.log(cliente.dizerCarroPreferido())



concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra o carro
        cliente.comprarCarro(carro)
    }
    
    //console.log(carro)
})
console.log(cliente.dizerQueCarroTem())


