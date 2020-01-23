import React from 'react';
import Col from 'react-bootstrap/Col';
import '../Card/Card.scss';

export const Card = props => {

	return props.pokemonList.map((pokemon, i) => {
		const waveColour = props.getWaveColour(pokemon.mainType);
		return (
			<Col xs="12" sm="6" lg="4" key={pokemon.id}>
				<div className="pokemonCard">
					<div className="pokemonCard_header">
						<div className="wave" style={{backgroundColor: waveColour}}></div>
						<div className="wave wave-two" style={{backgroundColor: waveColour}}></div>
						<div className="wave wave-three" style={{backgroundColor: waveColour}}></div>
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
				</div>
			</Col>
      	);
	});
}

export default Card;