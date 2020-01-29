import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../PokemonInfo/PokemonInfo.scss';

export const PokemonInfo = props => {
	// return props.pokemonInfo.map((pokemon, i) => {
		return (
			<Col xs="12" 
				style={{order: props.position}}
				className={`PokemonInfo ${props.activePokemon !== null ? 'active' : '' }`}
			>
				<h4>I *will* be expanding!</h4>
				<p>{props.pokemonInfo.name}</p>
				

			</Col>
	  	);
  	// });
}

export default PokemonInfo;