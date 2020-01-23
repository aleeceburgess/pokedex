import React from 'react';
import Col from 'react-bootstrap/Col';
import '../Card/Card.scss';

export const Card = props => {
	const waveColour = (mainType) => {
		const typeAndColour = {
			fire: '#F47942',
			grass: '#42f45d',
			electric: '#eef442',
			water: '#42b9f4',
			ground: '#ad622b',
			rock: '#946d50',
			fairy: '#ec9ded',
			poison: '#a95ce0',
			bug: '#d3e07e',
			dragon: '#e8d590',
			psychic: '#c3a1ed',
			flying: '#edd5a1',
			fighting: '#d4cab6',
			normal: '#a8a8a8'
		};
		
		// get key from object and find where the mainType is located within it. Then return the colour
		const index = Object.keys(typeAndColour).map(e => e).indexOf(mainType);
		const colour = Object.values(typeAndColour)[index];
		return colour;
	}

	return props.pokemonList.map((pokemon, i) => {
		return (
			<Col xs="12" sm="6" lg="4" key={pokemon.id}>
				<div className="pokemonCard">
					<div className="pokemonCard_header">
						<div className="wave" style={{backgroundColor: waveColour(pokemon.mainType)}}></div>
						<div className="wave wave-two" style={{backgroundColor: waveColour(pokemon.mainType)}}></div>
						<div className="wave wave-three" style={{backgroundColor: waveColour(pokemon.mainType)}}></div>
						<div className="image_container">
							<img
							src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} 
							alt={`Image of ${pokemon.name}`}
						/>
						</div>
					</div>
					<h2>{pokemon.name}</h2>
					<p>{pokemon.id}</p>
					<p>{pokemon.mainType}</p>
					<p>{waveColour(pokemon.mainType)}</p>
				</div>
			</Col>
      	);
	});
}

export default Card;