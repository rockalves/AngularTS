"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerQueCarroTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/*-- Criar carros----*/
var carroA = new Carro('Tucson', 5);
var carroB = new Carro('Veloster', 3);
var carroC = new Carro('Santana', 4);
/*-- Montar lista de carros da concessionária---*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Rua das Papoulas, 451', listaDeCarros);
/**Exibir lista de carros */
//console.log(concessionaria.mostrarListaDeCarros())
/** --Comprar o carro */
var cliente = new Pessoa('André', 'Tucson');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra o carro
        cliente.comprarCarro(carro);
    }
    //console.log(carro)
});
console.log(cliente.dizerQueCarroTem());
