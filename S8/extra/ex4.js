

fetch('http://localhost:3000/planets')
.then(res => res.json())
.then(planet => {
    createPlanet(planet)
    console.log(planet);
});

/*const orderDiary = (diary) => {
    return diary.sort((a, b) => b.date - a.date)
}*/

const createPlanet = (planets) => {
    for (const planet of planets) {
        const div$$ = document.createElement('div');
        //console.log(planet.name);
        div$$.innerHTML = `<h3>${planet.name}</h3><img class="imagen" src='${planet.image}'></img>`
        document.body.appendChild(div$$);
    }
}