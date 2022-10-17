/*Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click*/

/*const boton$$ = document.createElement("#button");
boton.innerText = 'Haz Click'; 
boton.innerHTML = 'btnToClick';*/

/*function clicked(){
    console.log("Me han clickado")
}

const divClick$$ = document.querySelector("[data-fn='click]");

divClick$$.addEventListener("Click", clicked);

divClick$$.innerHTML = `<div>
                            <p>
                                <span>Click me $(text)</span>
                            </p>
                        <div>*/

const btn$$ = document.createElement("button");
btn$$.setAttribute("id", "btnToClick");
btn$$.textContent="Pulsame";
document.body.appendChild(btn$$);

function clickMe(event){
    console.log(event);
}

btn$$.addEventListener("click", clickMe)

function hola(){
    console.log("Hello")
}

btn$$.addEventListener("mouseover", hola)

function adios(){
    console.log("Adios")
}

btn$$.addEventListener("mouseout", adios)