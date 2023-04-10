'use strict';

export class calculos {
    #valor;
    #numb;
    constructor(valor, numb){
        this.#valor = valor;
        this.#numb = numb;
    };

    division(valorAplicado, valorConvertido){
        const calculo = this.#valor/this.#numb;
        valorAplicado.textContent = this.#valor;
        valorConvertido.textContent = calculo;
    };
    
    multiplication(valorAplicado, valorConvertido){
        const calculo = this.#valor*this.#numb;
        valorAplicado.textContent = this.#valor;
        valorConvertido.textContent = calculo;
    };
};