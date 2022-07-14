

export const getPokemons = async () => {

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {
      headers: {
        Accept: 'application/json',
      },
    })
    return response.json()


  } catch (e) {
    console.log(e)

  }
}


export const getPokemon = async (url: string | '') => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    })
    return response.json()


  } catch (e) {
    console.log(e)

  }
}
