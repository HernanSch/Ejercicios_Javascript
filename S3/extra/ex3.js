/*Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div data-function="printHere"></div>

</body>
</html>
```*/


/*const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement('ul');

for (let index = 0; index < apps.length; index++) {
    const app = apps[index];
    const li$$ = document.createElement('li');
    li$$.textContent = a
    pp;
}

document.body.appendChild(ul$$);*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHere$$ = document.querySelector('[data-function="printHere"]'); // Buscamos seccion en HTML por contenido. []

const ul$$ = document.createElement('ul');

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    const li$$ = document.createElement('li'); // Declaramos variable li$$, asignamos funcion crear elemento 'li'
    li$$.textContent = element;
    ul$$.appendChild(li$$);
    
}

printHere$$.appendChild(ul$$);
