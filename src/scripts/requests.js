async function getAllCharacters(){
    const characters = await fetch(`https://rickandmortyapi.com/api/character`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        return res
    })
    return characters
}

async function getCharacterByName(characterName) {
    const characterNome = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        return res
    })
    return characterNome
}


async function getCharacterById(characterId) {
    const charactersId = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
.then(res=> res.json())
.then(res => {
    return res
})
return charactersId
}



getAllCharacters()


export {
    getAllCharacters,
    getCharacterByName,
    getCharacterById
}