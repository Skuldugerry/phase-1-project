
function getAnimeFacts(){
    fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
    .then(function (resp){
        return resp.json()
    })
    .then((data)=>data.data.forEach(animeFact => {revealFacts(animeFact)}))
}
getAnimeFacts()

function revealFacts(animeFact){
    let card=document.createElement('li')
    card.className="existing-anime-facts"
    card.innerHTML=`
    <div class="anime-facts">
        <h3>${animeFact.anime_name}</h3>
    </div>
        <img src= ${animeFact.anime_img}>
    
    `
    document.getElementById("existing_facts").appendChild(card)
    console.log(card)
}

