/*Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
comprender que hay muchas formas de hacer las cosas en javascript.*/

// 1-- forof y forin, cuantas veces ha sido añadido cada sonido a favorito
// 2-- nombre de los sonidos añadidos
// 3-- sistema de conteo repeticion del sonido añadido como favorito

let totalNumFav = 0;

let counterSoundWaves = 0;
let counterSoundRain = 0;
let counterSoundFirecamp = 0;
let counterSoundShower = 0;
let counterSoundTrain = 0;
let counterSoundWind = 0;

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

// 1-- forof y forin, cuantas veces ha sido añadido cada sonido a favorito
// 2-- nombre de los sonidos añadidos
// 3-- sistema de conteo repeticion del sonido añadido como favorito

for (const usuario of users) {

    for (const key in usuario.favoritesSounds) {

        const sound = usuario.favoritesSounds[key];

        if(sound.include('waves')){
            
            counterSoundWaves++;
            totalNumFav++;
        }
        else if (sound.include('rain')){
            counterSoundRain++;
            totalNumFav++;
        }
        else if (usuario.favoritesSounds[key] === 'firecamp'){
            counterSoundFirecamp++;
            totalNumFav++;
        }
        else if (usuario.favoritesSounds[key] === 'shower'){
            counterSoundTrain++;
            totalNumFav++;
        }
        else if (usuario.favoritesSounds[key] === 'wind'){
            counterSoundWind++;
            totalNumFav++;
        }

    }
    
}

console.log('Numero total de favoritos: ', totalNumFav);

console.log(counterSoundWind);
console.log(counterSoundRain);
console.log(counterSoundFirecamp);
console.log(counterSoundWaves);
console.log(counterSoundTrain);