/*Dado el siguiente objeto, crea una copia usando spread operators.*/


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};


const toyCopy = {...name, ...date, ...color};

const toyCopy1 = {...toy};
