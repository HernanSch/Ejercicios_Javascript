/*Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.*/

const baseUrl = 'https://api.nationalize.io?name=';

const inputValue = document.querySelector('input');
const button = document.querySelector('.js_button');

const search = (value) => {
    fetch(baseUrl+value)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    
    .then((myjson) => {
        console.log(myjson);
        return myjson;
    })
}
  
button.addEventListener('click', () => search (inputValue.value))