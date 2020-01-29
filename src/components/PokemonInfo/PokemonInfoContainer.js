import React from "react";
import { PokemonInfo } from "./PokemonInfo";


class PokemonInfoContainer extends React.Component {

  getPosition = () => {
    if(this.props.activePokemon !== null) {
      const grid = document.querySelector(".cardGrid");
      const cards = Array.from(grid.children);

      const cardStyle = window.getComputedStyle(cards[0]);
      const cardWidth = cards[0].offsetWidth + parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
      const gridStyle = window.getComputedStyle(grid);
      const gridWidth = grid.clientWidth - (parseFloat(gridStyle.paddingLeft) + parseFloat(gridStyle.paddingRight));
      const numPerRow = Math.floor(gridWidth / cardWidth);
      
      const cardsPosInCardsArr = this.props.activePokemon - 1;
      const rowPosition = cardsPosInCardsArr % numPerRow;
      const extraInfoPos = numPerRow + (cardsPosInCardsArr - rowPosition) - 1;
      // const referenceNode = extraInfoPos < cards.length ? cards[extraInfoPos] : cards[cards.length - 1];

      return extraInfoPos;

    }
  }


  render = () => {
    const activeNumber = this.props.activePokemon !== null ? this.props.activePokemon - 1 : '0';
    return (
        <PokemonInfo
          pokemonInfo={this.props.pokemonList[activeNumber]}
          activePokemon={this.props.activePokemon}
          position={this.getPosition()}
        />
    );
  };
}

export default PokemonInfoContainer;
