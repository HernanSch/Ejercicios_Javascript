/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.*/


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta', 'camiseta del chino loco']

for (let i = 0; i < products.length; i++){
    if(products[i].toLowerCase().includes('Camiseta'.toLowerCase)){
        console.log(products[i])
    }
    
}