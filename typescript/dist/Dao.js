"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('lógica de delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('logica getAll');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
