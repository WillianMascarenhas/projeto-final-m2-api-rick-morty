import { getAllCharacters, getCharacterByName, getCharacterById } from "./requests.js"

async function getForUlCharacterPage (){
    const ul = document.querySelector(".main__list")
    const arr = await getAllCharacters()
    arr.results.forEach(element => {
        if(element.id){
            ul.appendChild(createCharacters(element))
        }
    });
    goTocharacterPage()

} 

getForUlCharacterPage()



function createCharacters({image, name, status, species, id}){
    const container = document.createElement('tr')
    const divMaior = document.createElement("div")
    const imgs = document.createElement('img')
    const names = document.createElement('h2')
    const statu = document.createElement('h2')
    const specie = document.createElement('img')
    const specieSpan = document.createElement("span")
    const div = document.createElement("div")
    specie.classList.add('indentify')
    container.classList ="card_characters"
    imgs.classList.add('imagem_personagem')
    container.classList.add('container__li')
    names.classList.add('nome-personagem')
    imgs.src = image
    imgs.alt = name
    imgs.id = id
    imgs.classList = "img__character"

    names.classList = "name__character"

    names.innerText ="Nome:" +name
    names.id = id
    if(status == "Alive"){
        statu.innerText = "Status: Vivo"
        // statu.classLis:
    }else if (status == "Dead"){
        statu.innerText = "Status: Morto"
    }else{
        statu.innerText = "Status: Desconhecido"
    }
    specieSpan.innerText = "Especie:"
    statu.id = id
    if (species == "Human") {
        specie.src = "../assets/human.png"
    } else{
        specie.classList = "alien__img"
        specie.src = "../assets/et.png"
    }

    specie.id = id

    div.classList = "div__flex"

    divMaior.classList = "div__container"
    div.append(specieSpan, specie)
    divMaior.append(imgs, names, statu, div)
    container.appendChild(divMaior)
    return container
}


function renderSearch() {
    const searchInput = document.querySelector('#inputTag')
    const searchBtn = document.querySelector('#searchBtn')
    const ul = document.querySelector(".main__list")


    searchBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        const ulBtn = document.querySelector('ul')
        ulBtn.innerHTML = ''

        if(searchInput.value == ""){
            getForUlCharacterPage()}
        else{
            const byNames = await getCharacterByName(searchInput.value)
            if(byNames.error == "There is nothing here"){
                const li = document.createElement("li")
                li.classList ="mesage__error"
                const p = document.createElement("p")
                p.innerText ="Personagem não encontrado ou valor digitado é invalido. Por favor pesquise novamente."
                li.appendChild(p)
                ul.appendChild(li)
            }else{
                
                byNames.results.forEach(byName =>{
    
                    ulBtn.appendChild(createCharacters(byName))
                    goTocharacterPage()
                })
                
            }
        }
    })
}


function goToHome (){
    const btn = document.querySelector(".homeBtn")
    btn.addEventListener("click", (e)=>{
        window.location.href ="/index.html"
    })
}
goToHome()
renderSearch()

function goTocharacterPage (){
    const names = document.querySelectorAll(".name__character")
    const imgs = document.querySelectorAll(".img__character")
    
        names.forEach(name =>{ 
            name.addEventListener("click", ()=>{
                addToLs(name.id)
            })
        })

        imgs.forEach(img =>{
            img.addEventListener("click", ()=>{
                addToLs(img.id)
            })
        })

}

async function addToLs(id){
    const CharacterbyId = await getCharacterById(id)

    localStorage.setItem("@kezieApi:character", JSON.stringify(CharacterbyId))
    const toModal =JSON.parse(localStorage.getItem("@kezieApi:character"))
    if(toModal){
        window.location.href = "./pageCharacter.html"

    }
}
