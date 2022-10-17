/*Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. Simplemente instálalo de manera global usando el comando  `npm i -g json-server` y una vez lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.
 
Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.
  
Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...*/

fetch('http://localhost:3000/diary')
.then(res => res.json())
.then(diary => {
    //console.log(diary);
    const newDiary = orderDiary(diary);
    createDiary(newDiary)
    //document.body.innerHTML = `<h3>${diary[0].title}</h3><h5>${diary.date}</h5><p>${diary.description}</p>`
    //console.log(diary[0].date);
});

const orderDiary = (diary) => {
    return diary.sort((a, b) => b.date - a.date)
}

const createDiary = (notes) => {
    for (const note of notes) {
        const div$$ = document.createElement('div');
        div$$.innerHTML = `<h3>${note.title}</h3><h5>${note.date}</h5><p>${note.description}</p>`
        document.body.appendChild(div$$);
    }
}






/*const createDiary = (diaryNotes) => {
    for (const diaryNote of diaryNotes) {
        const div$$ = document.createElement('div');
        div$$.innerHTML = `<h3>${diaryNote.title}</h3><h5>${diaryNote.date}</h5><p>${diaryNote.description}</p>`
    }
}*/


/*function printDiary(){
    document.body.innerHTML += `<div><h3>${diaryNote.title}</h3></div>`;
  }*/
