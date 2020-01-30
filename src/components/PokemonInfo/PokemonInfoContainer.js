import React from "react";
import { PokemonInfo } from "./PokemonInfo";


const PokemonInfoContainer = (props) => {

  const getPosition = () => {
    if(props.activePokemon !== null) {
      const grid = document.querySelector(".cardGrid");
      const cards = Array.from(grid.children);

      const cardStyle = window.getComputedStyle(cards[0]);
      const cardWidth = cards[0].offsetWidth + parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
      const gridStyle = window.getComputedStyle(grid);
      const gridWidth = grid.clientWidth - (parseFloat(gridStyle.paddingLeft) + parseFloat(gridStyle.paddingRight));
      const numPerRow = Math.floor(gridWidth / cardWidth);
      
      const cardsPosInCardsArr = props.activePokemon - 1;
      const rowPosition = cardsPosInCardsArr % numPerRow;
      const extraInfoPos = numPerRow + (cardsPosInCardsArr - rowPosition) - 1;
      // const referenceNode = extraInfoPos < cards.length ? cards[extraInfoPos] : cards[cards.length - 1];

      return extraInfoPos;

    }
  }

  
  if(props.activePokemon == null){
    return null;
  }

  const activeNumber = props.activePokemon - 1;
  return (
    <PokemonInfo
      pokemonInfo={props.pokemonList[activeNumber]}
      position={getPosition()}
    />
  );

}

export default PokemonInfoContainer;
