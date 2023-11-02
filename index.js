fetch('https://whos-that-api.onrender.com/api/whosThatApi/Pokemon?pokemon=annihilape&password=mudkip-rules')
.then(res => res.json())
.then(data => {
    console.log(data)
    const outputElement = document.getElementById('pokemonData')
    outputElement.textContent = JSON.stringify(data, null, 2)
    pokemonNameOnDom = document.getElementById('pokemonName')
    pokemonName.textContent = JSON.stringify(data["Pokemon Details"]["pokemonName"])
})
