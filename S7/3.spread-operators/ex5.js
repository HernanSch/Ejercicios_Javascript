/*Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo
, usando spread operatos.*/

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

/*const newColors = [...colors.splice(1,1)]; // guarda en un array el elemento eliminado.*/

const newColors2 = [...colors]
const newColorsL = newColors2.splice(1,1);


console.log(newColorsL)
