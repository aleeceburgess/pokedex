import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../PokemonInfo/PokemonInfo.scss';

export const PokemonInfo = props => {
	return (
		<Col xs="12" 
			style={{order: props.position}}
			className={`PokemonInfo ${props.pokemonInfo !== null ? 'active' : '' }`}
		>
			<h4>I *will* be expanding!</h4>
			<p>{props.pokemonInfo.name}</p>
			<p>{props.position}</p>
			

		</Col>
  	);
}

export default PokemonInfo;