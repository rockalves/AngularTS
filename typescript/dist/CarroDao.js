"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('lógica de delete');
        return new Carro_1.default('', 3);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Carro_1.default('', 3);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('logica getAll');
        return [new Carro_1.default('', 3)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
