// fetch data from db.json
function returnData(){
    fetch("http://localhost:3000/anime")
    .then((Response)=>Response.json())
    .then((newAnime)=>newAnime.forEach(newAnime => {showNewAnime(newAnime)
    }));
}
returnData()

// show data from db.json on page
function showNewAnime(newAnime){
    let sentry=document.createElement('li')
    sentry.innerHTML=`
    <div class="images">
        <h3 class="animeHeading" id="newAnimeTitle">${newAnime.name}
         <button class="deleteBtn" type="button">DELETE</button> </h3>
        <img src="${newAnime.ImageURL}">
    </div>
    `
    document.querySelector('#data').appendChild(sentry)
}


