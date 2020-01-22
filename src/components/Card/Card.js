import React from 'react';
import Col from 'react-bootstrap/Col';
import '../Card/Card.css';

export const Card = props => {
	return props.pokemonList.map((pokemon, i) => {
		return (
			<Col xs lg="4" className="pokemonCard">
				<h2>{pokemon.name}</h2>
				<p>{pokemon.id}</p>
				<img className="pokemonCard_image" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} />
			</Col>
      	);
	});
}

export default Card;