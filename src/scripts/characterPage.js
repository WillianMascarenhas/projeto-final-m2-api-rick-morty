async function getCharacterId(){
    const btn = document.querySelector(".moreinfos")
    const modal = document.querySelector(".container__modal")
    const ul = document.querySelector(".container__card")
    const character = JSON.parse(localStorage.getItem("@kezieApi:character"))
    criandoCard(character)
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        const card = createModal(character)
        ul.appendChild(card)
        modal.showModal()
        closeModal()
    })
}

function closeModal(){ 
    const btn = document.querySelector(".close__modal")
    const modal = document.querySelector(".container__modal")
    const ul = document.querySelector(".container__card")

    btn.addEventListener("click", ()=>{
        modal.close()
        ul.innerHTML =""
    })
}
getCharacterId()

function goToHome(){
    const btnHome = document.querySelector(".btn__home")

    btnHome.addEventListener("click", (e) =>{
        window.location.href = "/index.html"

        localStorage.removeItem("@kezieApi:character")
    })
}
goToHome()

function createModal(obj){
    const li = document.createElement("li")
    const name = document.createElement("h2")
    const gender = document.createElement("span")
    const image = document.createElement("img")
    const location = document.createElement("span")
    const species = document.createElement("span")
    const status = document.createElement("span")
    const type = document.createElement("span")

    name.innerText = `Nome: ${obj.name}`
    gender.innerText = `Genero: ${obj.gender}`
    
    image.src = obj.image
    image.alt = obj.name

    location.innerText = "Localização: "+obj.location.name
    species.innerText = "Especie: "+obj.species
    status.innerText = "Status: " + obj.status

    li.append(image, name, gender, species, location, status, type)

    return li
}


function criandoCard(obj){
    
    const h1 = document.querySelector(".name")
    const img = document.querySelector('.image')
    const p = document.querySelector('.type')

    h1.innerText = obj.name

    img.src= obj.image
    img.alt = obj.name

    p.innerText = obj.species
}

function goToList (){
    const btn = document.querySelector(".btn__back--list")

    btn.addEventListener("click", (e)=>{
        localStorage.removeItem("@kezieApi:character")

        window.location.href = "./listCharacters.html"

    })
}
goToList()