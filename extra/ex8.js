/*Dado el siguiente javascript, crea una función `attack` a la que le pases como parametro las dos naves y simule un disparo.
Esta función generara un numero aleatorio de 1 al numero de la propiedad `.damage` de la primera nave y le restará el resultado al valor de la propiedad `.pv` de la segunda nave.
Ejecuta la función tantas veces como quieras.*/

let ship1 = {name: "Banca rota", damage: 44, pv: 150};
let ship2 = {name: "Cacique pero no", damage: 66, pv: 124}

const randomAttack = (a,b) => {    
    let dmg = Math.floor(Math.random() * a.damage)+1;
    b.pv = b.pv - dmg;

    if(a.pv > 0 && b.pv > 0){
        randomAttack(a,b)    
    }else{
        console.log(ship1);
        console.log(ship2);
    }
}
randomAttack(ship1, ship2)
randomAttack(ship2, ship1)

