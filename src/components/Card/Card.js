import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Waves from '../Waves/Waves';
import '../Card/Card.scss';

export const Card = props => {

	return props.pokemonList.map((pokemon, i) => {
		//const waveColour = props.getWaveColour(pokemon.mainType);
		return (
			<Col xs="12" sm="6" lg="4" 
				key={pokemon.id}
			>
				<div 
					className={`pokemonCard ${props.activeCard == pokemon.id ? 'active' : '' }`}
					data-id={pokemon.id}
					onClick={props.handleCardClick.bind(this)}
				>
					<div className="pokemonCard_header">
						<Waves waveColour={props.getWaveColour(pokemon.mainType)} />
						<div className="image_container">
							<img
							src={pokemon.image} 
							alt={`Image of ${pokemon.name}`}
						/>
						</div>
					</div>
					<div className="pokemonCard_info">
						<h2>{pokemon.name}</h2>
						<p>{pokemon.id}</p>
						<p>{pokemon.mainType}</p>
					</div>
				</div>
			</Col>
      	);
	});
}

export default Card;