import React, { useState, useEffect } from 'react';
import { PokemonInfo } from "./PokemonInfo";


const PokemonInfoContainer = (props) => {

  const getPosition = () => {
    const grid = document.querySelector(".cardGrid");
    const card = document.querySelector(".pokemonCard");

    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
    const gridStyle = window.getComputedStyle(grid);
    const gridWidth = grid.clientWidth - (parseFloat(gridStyle.paddingLeft) + parseFloat(gridStyle.paddingRight));
    const numPerRow = Math.floor(gridWidth / cardWidth);
    
    const cardsPosInCardsArr = props.activePokemon - 1;
    const rowPosition = cardsPosInCardsArr % numPerRow;
    const extraInfoPos = numPerRow + (cardsPosInCardsArr - rowPosition) - 1;

    return extraInfoPos;
  }



  const [ position, setPosition ] = useState(getPosition());

  useEffect(() => {
    setPosition(getPosition(props));

    function handleResize() {
      setPosition(getPosition());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [props]);


  const activeNumber = props.activePokemon - 1;
  return (
    <PokemonInfo
      pokemonInfo={props.pokemonList[activeNumber]}
      position={position}
    />
  );

}

export default PokemonInfoContainer;
