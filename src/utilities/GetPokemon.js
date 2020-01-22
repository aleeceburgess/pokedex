const pokemonCount = 10;

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
			name: pokemonData.name
		});
	} 

	catch(e) {
		return 'error';
	}
};


export default getPokemonCount;