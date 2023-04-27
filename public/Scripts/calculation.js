'use strict';

export class calculate {
    #inputValue;
    #numb;
    constructor(inputValue, numb){
        this.#inputValue = inputValue;
        this.#numb = numb;
    };

    division(appliedValue, convertedValue){
        const calculation = this.#inputValue/this.#numb;
        appliedValue.textContent = this.#inputValue;
        convertedValue.textContent = calculation;
    };
    
    multiplication(appliedValue, convertedValue){
        const calculation = this.#inputValue*this.#numb;
        appliedValue.textContent = this.#inputValue;
        convertedValue.textContent = calculation;
    };
};