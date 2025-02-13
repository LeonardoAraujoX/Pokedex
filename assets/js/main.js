const pokemonList = document.getElementById('pokemonList')
const load = document.getElementById('load')

const limit=5
let offset=0

function convertPokemonToHtml(pokemon){ 
    return `
         <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span> 

                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png" 
                    alt="${pokemon.name}"> 

                </div>
                
            </li>
     `
}


function loadPokemons(offset,limit){ 
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => { 

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToHtml(pokemon)
    })

    const newHtml = newList.join('')
    pokemonList.innerHTML += newHtml
    })
}

loadPokemons(offset, limit)

load.addEventListener('click', () => {
    offset += limit
    loadPokemons(offset,limit)
})
