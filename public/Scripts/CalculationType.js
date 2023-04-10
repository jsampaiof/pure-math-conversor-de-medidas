'use strict';

const type = {
    multiplication:[
        {
            id: 1, 
            name: 'Km para M',
            value: 1000,
            class: 'kilometer-to-meter',
        },
        {
            id: 2, 
            name: 'M para Cm',
            value: 100,
            class: 'meter-to-centimeter',
        },
        {
            id: 3, 
            name: 'Mi para Km',
            value: 1609,
            class: 'mile-to-kilometer',
        }
    ],
    division:[
        {
            id: 1, 
            name: 'M para Km',
            value: 1000, 
            class: 'meterToKilometer',
        },
        {
            id: 2, 
            name: 'Cm para M',
            value: 100, 
            class: 'centimeterToMeter',
        }
    ]
};

function getType(){
    return type;
};

export {getType};