import React from "react";
import { Card } from "./Card";


class CardContainer extends React.Component {

  getDetailColour = (mainType) => {
    const typeAndColour = {
      fire: '#F47942',
      grass: '#76f589',
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

  handleClick = (e) => {
  	this.props.handleCardClick(e);
  }

  // returns single or multuple spans containing the types for pokemon
  renderTypeList = (types, detailColour) => {
      const rgbaColour = this.hex2rgba(detailColour, 0.6);
      return types.map((type, i) => {
          return (
              <span 
                  key={i}
                  style={{backgroundColor: rgbaColour}}
              >{type.type.name}</span>
          )
      });
  }

  hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };


  render = () => {
    return (
        <Card
          pokemonList={this.props.pokemonList}
          getDetailColour={this.getDetailColour}
          handleClick={this.handleClick}
          activeCard={this.props.activePokemon}
          renderTypeList={this.renderTypeList}
        />
    );
  };
}

export default CardContainer;
