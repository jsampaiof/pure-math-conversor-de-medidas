function metroparakm(){
    const metros = document.querySelector('#valores-metros').value;
    const calculo = metros/1000;
    document.querySelector('#valor-em-metros').textContent = metros;
    document.querySelector('#valor-em-quilometros').textContent = calculo;
};

function kmparametros(){
    const km = document.querySelector('#valores-quilometros').value;
    const calculo = km*1000;
    document.querySelector('#valor-em-quilometros-2').textContent = km;
    document.querySelector('#valor-em-metros-2').textContent = calculo;
};

function cmparametros(){
    const cm = document.querySelector('#valores-centimetros').value;
    const calculo = cm/100;
    document.querySelector('#valor-em-cm').textContent = cm;
    document.querySelector('#valor-em-metros-3').textContent = calculo;
};

function mparacm(){
    const metros = document.querySelector('#valores-metros-2').value;
    const calculo = metros*100;
    document.querySelector('#valor-em-metros-4').textContent = metros;
    document.querySelector('#valor-em-centimetro').textContent = calculo;
};

function raiodacircunferencia(){
}

function diametrodacircunferencia(){
}

function comprimentodacircunferencia(){
}