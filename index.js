const url = 'https://whos-that-api.onrender.com/api/whosThatApi/Pokemon?pokemon=garchomp&password=mudkip-rules'


fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})

.then(res => {
    if (!res.ok) {
        throw new Error('Network response was not okay')
    }
    return res.json()
})
.then(data => {
    document.getElementById('pokemonImage').src = data['Pokemon Details']['pokemonImage']

    function setTextContentById(id, value) {
        const element = document.getElementById(id)
        if (element && element !== 'pokemonImage') {
            element.textContent = value;
        }
    }

    Object.keys(data['Pokemon Details']).forEach(key => {
        const value = data['Pokemon Details'][key]
        return setTextContentById(key, value)
        
    })
    
})
.catch(error => {
    return (error)
})

