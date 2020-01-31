import React from 'react';
import Col from 'react-bootstrap/Col';

import Waves from '../Waves/Waves';

import '../Card/Card.scss';

export const Card = props => {
	return props.pokemonList.map((pokemon, i) => {

		const detailColour = props.getDetailColour(pokemon.mainType);

		return (
			<Col xs="12" sm="6" lg="4" 
				key={pokemon.id}
				style={{order: i}}
			>
				<div 
					className={`pokemonCard ${props.activeCard === pokemon.id ? 'active' : '' }`}
					data-id={pokemon.id}
					onClick={props.handleClick.bind(this)}
				>
					<div className="pokemonCard_header">
						<Waves detailColour={detailColour} />
						<div className="image_container">
							<img
								src={pokemon.image} 
								alt={`${pokemon.name}`}
							/>
						</div>
					</div>
					<div className="pokemonCard_info">
						<h2>{pokemon.name}</h2>
						<div className="type_list">
							{props.renderTypeList(pokemon.types, detailColour)}
						</div>
					</div>
				</div>
			</Col>
      	);
	});
}

export default Card;