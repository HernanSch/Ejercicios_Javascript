/*Dado el siguiente string 

const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`

transformarlo en el siguiente 

`Gracioso Pero No Gracioso De Risa Gracioso De Raro`*/

const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`
const newText = text.split('-', 9);
let upperList = [];
let newUpperList = [];


const upperWord = () => {
    //console.log('Estoy dentro del bucle');
    for (let i = 0; i < newText.length; i++) {
        const element = newText[i];
        
        upperList = element[0].toUpperCase() + element.substring(1);
        newUpperList.push(upperList);       
        //console.log(upperList);
    }  
    //upperList = upperList.join(' ');
}

//console.log(newText);

console.log(newUpperList.join(' '));
upperWord(newText);

