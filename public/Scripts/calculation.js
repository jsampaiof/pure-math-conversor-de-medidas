'use strict';

export class calculos {
    #valor
    #numb
    constructor(valor, numb){
        this.#valor = valor;
        this.#numb = numb;
    }

    division(){
        const calculo = this.#valor/this.#numb;
        document.querySelector('#valor-em-metros').textContent = this.#valor;
        document.querySelector('#valor-em-quilometros').textContent = calculo;
    }
    
    
    
    
    
    
    
    
    
    
    metroparakm(){
    const calculo = this.#valor/1000;
        document.querySelector('#valor-em-metros').textContent = this.#valor;
        document.querySelector('#valor-em-quilometros').textContent = calculo;
    };
    
    kmparametros(){
        const km = document.querySelector('#valores-quilometros').value;
        const calculo = km*1000;
        document.querySelector('#valor-em-quilometros-2').textContent = km;
        document.querySelector('#valor-em-metros-2').textContent = calculo;
    };
    
    cmparametros(){
        const cm = document.querySelector('#valores-centimetros').value;
        const calculo = cm/100;
        document.querySelector('#valor-em-cm').textContent = cm;
        document.querySelector('#valor-em-metros-3').textContent = calculo;
    };
    
    mparacm(){
        const metros = document.querySelector('#valores-metros-2').value;
        const calculo = metros*100;
        document.querySelector('#valor-em-metros-4').textContent = metros;
        document.querySelector('#valor-em-centimetro').textContent = calculo;
    };
}