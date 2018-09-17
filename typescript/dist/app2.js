"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/*-- Criar carros----*/
var carroA = new Carro_1.default('Tucson', 5);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Santana', 4);
/*-- Montar lista de carros da concessionária---*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Rua das Papoulas, 451', listaDeCarros);
/**Exibir lista de carros */
//console.log(concessionaria.mostrarListaDeCarros())
/** --Comprar o carro */
var cliente = new Pessoa_1.default('André', 'Tucson');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra o carro
        cliente.comprarCarro(carro);
    }
    //console.log(carro)
});
console.log(cliente.dizerQueCarroTem());
