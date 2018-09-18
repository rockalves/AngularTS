import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from'./Concessionaria'


let carro = new Carro('Vectra', 3)
carro.acelerar()
carro.acelerar()

let moto = new Moto()
moto.acelerar()
moto.acelerar()

let concessionaria = new Concessionaria('Rua as balbal',[])

console.log(moto)
console.log(carro)

concessionaria.fornecerHorariosDeFuncionamento();
console.log(concessionaria.fornecerHorariosDeFuncionamento())