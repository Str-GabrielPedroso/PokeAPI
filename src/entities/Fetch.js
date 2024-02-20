async function fetchAPI() {
    const getAll = await fetch('https://pokeapi.co/api/v2/pokemon-form/?limit=721').then(result => result.json())

    const getUrl = getAll.results.map(form => form.url)

    const getForm = await Promise.all(getUrl.map(async url => {
        return await fetch(url).then(result => result.json())
    }))

    const pokemonsWithTypes = getForm.map(pokeInfo => ({
        id: pokeInfo.id,
        name: pokeInfo.name.replace(/[-0-9]/g, ' '),
        types: pokeInfo.types.map(typeInfo => typeInfo.type.name),
        sprites: pokeInfo.sprites.front_default
    }))

    return pokemonsWithTypes
}

export { fetchAPI }