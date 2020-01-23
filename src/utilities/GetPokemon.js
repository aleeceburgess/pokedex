const pokemonCount = 75;

const getPokemonCount = async () => {
	const pokemonData = [];
	for (let i = 1; i <= pokemonCount; i++) {
		const pokemon = await catchPokemon(i);
		pokemonData.push(pokemon);
	}
	return pokemonData;
};

const catchPokemon = async id => {
	try { 
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokemonData = await res.json();
		return ({
			id: pokemonData.id,
			name: pokemonData.name,
			types: pokemonData.types,
			mainType: getMainType(pokemonData.types)
		});
	} 

	catch(e) {
		return 'error';
	}
};

const getMainType = (types) => {
    const typeArray = ['fire', 'grass', 'electric', 'water', 'ground', 'rock', 'fairy', 'poison', 'bug', 'dragon', 'psychic', 'flying', 'fighting', 'normal'];

    const pokemonTypeArray = types.map(type => type.type.name);
    const type = typeArray.find(type => pokemonTypeArray.indexOf(type) > -1);
    return type;
  };


export default getPokemonCount;