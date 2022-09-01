document.addEventListener('DOMContentLoaded',function(){
        let animeFact = document.querySelector('form')
        animeFact.addEventListener('submit',(e)=>{
        e.preventDefault()
        addFact(e.target.inputBox.value)
        animeFact.reset()
    })
}
)

function addFact(fact){
    let p=document.createElement('p')
    let btn=document.createElement('button')
    btn.addEventListener('click',deleteFact)
    btn.textContent='Erase Fact'
    p.textContent=`${fact.toUpperCase()}  `
    p.appendChild(btn)
    document.querySelector('#data').appendChild(p)
}

function deleteFact(e){
    e.target.parentNode.remove()
}
