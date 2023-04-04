import { getAllCharacters, getCharacterById } from "./requests.js";

function showInput (){
    const btn = document.querySelector(".btn__dropDown")
    const btnPage = document.querySelector(".btn__characters1")
    btn.addEventListener("click", () =>{
        btnPage.classList.toggle("flex")
        btn.classList.toggle("flex__none")
    })
}
showInput()

async function getForUlHomePage (){
    const ul = document.querySelector(".container__card--homePage")
    const img = document.querySelector(".loadding")

    img.style.display = "initial"
    
    const arr = await getAllCharacters()
    
    arr.results.forEach(element => {
        if(element.id <= 5){
            setTimeout(()=> {
                img.style.display = "none"
                ul.appendChild(criarCardHomePage(element))
                getInfoCharacter()
            }, 1500)    
        }
    });
}
getForUlHomePage()

function criarCardHomePage({id, image, name}){
    const li = document.createElement("li")
    const img = document.createElement("img")
    const span = document.createElement("span")

    li.id = id
    li.classList = "card__homePage"

    img.classList = "card__img--homePage"
    img.id = id
    img.src = image
    img.alt = name

    span.innerText = name
    span.id = id

    li.append(img, span)

    return li
}

function goToList (){
    const btn = document.querySelector(".btn__characters")
    const btn1 = document.querySelector(".btn__characters1")

    btn.addEventListener("click", () =>{
        window.location.href = "./src/pages/listCharacters.html"
    })
    btn1.addEventListener("click", () =>{
        window.location.href = "./src/pages/listCharacters.html"
    })
    
}
goToList()


function getInfoCharacter (){
    const names = document.querySelectorAll(".card__homePage > span")
    const imgs = document.querySelectorAll(".card__img--homePage")

    names.forEach(name =>{
        name.addEventListener("click", async ()=>{
            toCharacterPage(name.id)
        })
    })

    imgs.forEach(img =>{
        img.addEventListener("click", async ()=>{
            toCharacterPage(img.id)
        })
        
    })
}

async function toCharacterPage(id){
    const byId = await getCharacterById(id)

    
    localStorage.setItem("@kezieApi:character", JSON.stringify(byId))
    
    const LocalS = JSON.parse(localStorage.getItem("@kezieApi:character"))
    
    if(LocalS){
        window.location.href = "./src/pages/pageCharacter.html"
    }

}