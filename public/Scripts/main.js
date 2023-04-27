'use strict';

import {calculate} from './calculation.js';

const calculationButton = document.querySelectorAll('.calculation-button input');

calculationButton.forEach((element) => {
    element.addEventListener('click', function(){
        const input = this.parentNode.parentNode.querySelector('.value');
        const appliedValue = this.parentNode.parentNode.querySelector('.applied-value');
        const convertedValue = this.parentNode.parentNode.querySelector('.converted-value');
        if(this.classList.contains('division')){
            const inputClass = this.className;
            const numb = parseInt(inputClass.replace(/\D/g, " "));
            const inputValue = parseFloat(input.value);
            const calculation = new calculate(inputValue, numb);
            calculation.division(appliedValue, convertedValue);
        } else if (this.classList.contains('multiplication')){
            const inputClass = this.className;
            const numb = parseInt(inputClass.replace(/\D/g, " "));
            const inputValue = parseFloat(input.value);
            const calculation = new calculate(inputValue, numb);
            calculation.multiplication(appliedValue, convertedValue);
        }
    });
});