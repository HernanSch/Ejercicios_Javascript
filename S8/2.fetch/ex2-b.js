/*En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.*/

const baseUrl = 'https://api.nationalize.io?name=';

const inputValue = document.querySelector('input');
const button = document.querySelector('.js_button');

const search = () => {
    fetch(baseUrl+ inputValue.value)
    .then((response) => {
        
        return response.json();
    })
    
    .then((myjson) => {
        console.log(myjson);
        for (let i = 0; i < myjson.country.length; i++) {
            const element = document.createElement('p');
            element.textContent = "El nombre " + inputValue.value + " " + (myjson.country[i].probability * 100) + " " + "porciento de ser de " + myjson.country[i].country_id + "."

            document.body.appendChild(element)
            
        }
        
        
        return myjson;
    })
}
  
button.addEventListener('click', () => search (inputValue.value))
