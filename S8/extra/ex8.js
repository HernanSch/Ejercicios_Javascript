const button$$ = document.querySelector("[data-fn='callACat']");
button$$.addEventListener("click", getCats);

function getCats() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(cat => {
        console.log(cat);
        printCats(cat);
    });
}



printCats = (cat) => {

    const div$$ = document.createElement('div');    
    div$$.innerHTML = `<img src='${cat[0].url}'>`
    document.body.appendChild(div$$);


    const button2$$ = document.createElement('button'); 
    button2$$.type = 'button'; 
    button2$$.innerText = 'Remove';   
    
    button2$$.addEventListener("click", () => {
        removeCat(div$$)
    })
    div$$.appendChild(button2$$);
}

removeCat = (div$$) => {
    div$$.remove();
}


