import React from "react";
import { Card } from "./Card";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePokemon: null
    };
  }

  getWaveColour = (mainType) => {
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

  handleCardClick = (e) => {
    this.setState({
      activePokemon: e.currentTarget.dataset.id
    });
  }


  render = () => {
    return (
        <Card
          pokemonList={this.props.pokemonList}
          getWaveColour={this.getWaveColour}
          handleCardClick={this.handleCardClick}
          activeCard={this.state.activePokemon}
        />
    );
  };
}

export default CardContainer;
