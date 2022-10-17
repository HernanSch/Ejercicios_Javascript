
const getFilms = async () =>{
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(film => {
        //console.log(film);
        createFilm(film);
    });
}

const createFilm = (films) => {
    for (const film of films) {
        const div$$ = document.createElement('div');
        //console.log(film.name);
        div$$.innerHTML = `<h3>${film.title}</h3><img src='${film.image}'></img>`
        document.body.appendChild(div$$);
    }
}

getFilms();
