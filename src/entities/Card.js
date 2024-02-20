function card(pokemon) {
    const card = document.createElement(`div`)
    card.classList.add(`container`, `${pokemon.types[0]}bg`)
    card.id = `pokemon-${pokemon.id}`

    const pokemonId = document.createElement(`span`)
    pokemonId.classList.add(`cardId`)
    pokemonId.textContent = pokemon.id
    
    const pokemonSprite = document.createElement(`img`)
    pokemonSprite.classList.add(`cardImg`)
    pokemonSprite.src = pokemon.sprites

    const pokemonName = document.createElement(`span`)
    pokemonName.classList.add(`cardName`)
    pokemonName.textContent = pokemon.name

    const pokemonTypes = document.createElement(`div`)
    pokemonTypes.classList.add(`types`)
    
    pokemon.types.forEach(type => {
        const typeElement = document.createElement(`span`)
        typeElement.classList.add(type, `typesContainer`)
        typeElement.textContent = type

        pokemonTypes.appendChild(typeElement)
    })

    card.append(pokemonId, pokemonSprite, pokemonName, pokemonTypes)
    document.querySelector(`.main`).append(card)
}

export { card }