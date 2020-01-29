const pokemonCount = 6;

const getPokemonCount = async () => {
	const pokemonData = [];
	for (let i = 1; i <= pokemonCount; i++) {
		const data = await catchPokemon(i);
		const image = await catchPokemonImage(i);
		pokemonData.push({
			id: data.id,
			name: data.name,
			types: data.types,
			mainType: getMainType(data.types),
			image: URL.createObjectURL(image)
		})
	}
	return pokemonData;
};

const catchPokemon = async id => {
	try { 
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokemonData = await res.json();
		return pokemonData;
	} 

	catch(e) {
		return 'error';
	}
};

const catchPokemonImage = async id => {
	try {
		const url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
		const res = await fetch(url);
		const pokemonData = await res.blob();
		return pokemonData;
	}

	catch(e) {
		return 'error';
	}
}

const getMainType = (types) => {
    const typeArray = ['fire', 'grass', 'electric', 'water', 'ground', 'rock', 'fairy', 'poison', 'bug', 'dragon', 'psychic', 'flying', 'fighting', 'normal'];

    const pokemonTypeArray = types.map(type => type.type.name);
    const type = typeArray.find(type => pokemonTypeArray.indexOf(type) > -1);
    return type;
  };


export default getPokemonCount;