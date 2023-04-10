'use strict';

import {calculos} from './calculation.js';
import * as Type from './CalculationType.js';

const botaocalcular = document.querySelectorAll('.botão-calcular input');
const input = document.querySelectorAll('.valores');
const inputClass = input[0].className;
const numb = parseInt(inputClass.replace(/\D/g, " "));
console.log(numb);

botaocalcular.forEach((element) => {
    element.addEventListener('click', function(event){
        if(this.classList.contains('division')){
            const clicked = event.target;
            const valor = parseFloat(input.value);
            const calculo = new calculos(valor, numb);
            calculo.division();
        } else if (this.classList.contains('multiplication')){}
    });
});