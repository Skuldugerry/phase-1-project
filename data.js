
// Fetch anime list from server
function getAnimeFacts(){
    fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
    .then(function (resp){
        return resp.json()
    })
    .then((data)=>data.data.forEach(animeFact => {revealFacts(animeFact)}))
    }
getAnimeFacts()

// show anime list on webPage
function revealFacts(animeFact){
    let card=document.createElement('li')
    card.className="existing-anime-facts"
    card.innerHTML=`
    <div class="anime-facts">
        <h3 class="animeHeading">${animeFact.anime_name.toUpperCase()}</h3>
    </div>
        <img src= ${animeFact.anime_img}>
    
    `
    document.getElementById("existing_facts").appendChild(card)
}

//  Event listner on add button for filling both Anime Name and Image URL
document.addEventListener('DOMContentLoaded',()=>{
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let newAnime={
        name:e.target.animeName.value,
        ImageURL:e.target.img_url.value,
    }
    addAnime(newAnime)
}
)})

// Clicking Add button on anime Name and ImageURL adds details to server(POST request)
function addAnime(newAnime){
    return fetch("http://localhost:3000/anime",{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(newAnime)
    })
    .then(res=>res.json())
    .then((anime)=>console.log(anime))
}
