function returnData(){
    fetch("http://localhost:3000/anime")
    .then((Response)=>Response.json())
    .then((newAnime)=>newAnime.forEach(newAnime => {showNewAnime(newAnime)
    }));
}
returnData()

function showNewAnime(newAnime){
    let sentry=document.createElement('li')
    sentry.innerHTML=`
    <div class="images">
        <h3 class="animeHeading">${newAnime.name}</h3>
        <img src="${newAnime.ImageURL}">
    </div>
    `
    console.log(document.querySelector('#data').appendChild(sentry))
}