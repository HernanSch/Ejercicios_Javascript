/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul');

for (let index = 0; index < countries.length; index++) {
    const countrie = countries[index];
    const li$$ = document.createElement('li');
    li$$.textContent = countrie;
}

document.body.appendChild(ul$$);