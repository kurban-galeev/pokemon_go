import { PokemonClient } from 'pokenode-ts';

export const getPokemons = async () => {
  const api = new PokemonClient()


  await api
    .getPokemonByName('luxray')
    .then((data) => console.log(data)) // will output "Luxray"
    .catch((error) => console.error(error));
}
