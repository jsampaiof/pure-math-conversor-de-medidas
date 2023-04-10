'use strict';

import {calculos} from './calculation.js';

const botaocalcular = document.querySelectorAll('.botão-calcular input');

botaocalcular.forEach((element) => {
    element.addEventListener('click', function(){
        const input = this.parentNode.parentNode.querySelector('.valores');
        const valorAplicado = this.parentNode.parentNode.querySelector('.valor-aplicado');
        const valorConvertido = this.parentNode.parentNode.querySelector('.valor-convertido');
        if(this.classList.contains('division')){
            const inputClass = this.className;
            const numb = parseInt(inputClass.replace(/\D/g, " "));
            const valor = parseFloat(input.value);
            const calculo = new calculos(valor, numb);
            calculo.division(valorAplicado, valorConvertido);
        } else if (this.classList.contains('multiplication')){
            const inputClass = this.className;
            const numb = parseInt(inputClass.replace(/\D/g, " "));
            const valor = parseFloat(input.value);
            const calculo = new calculos(valor, numb);
            calculo.multiplication(valorAplicado, valorConvertido);
        }
    });
});