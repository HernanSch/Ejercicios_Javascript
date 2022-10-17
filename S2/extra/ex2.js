/*Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
 los usuarios.*/
 let mediaVolumen = 0;
 let totalVolumen = 0;
 let total = 0;

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



for (const usuario of users) {

    for (const key in usuario.favoritesSounds) {
        
        const sound = usuario.favoritesSounds[key];
        totalVolumen += sound.volume;
        total += 1;
        
    }
    
}

mediaVolumen = totalVolumen/total;

console.log('La media total de volumen de todos los usuarios es: ', mediaVolumen)