import { fetchAPI } from "./Fetch.js"
import { card } from "./Card.js"

async function app() {
    const pokemons = await fetchAPI()
    pokemons.forEach(card)
}

export { app }
