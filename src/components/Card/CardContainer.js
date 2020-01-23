import React from "react";
import { Card } from "./Card";

class SisterCitiesContainer extends React.Component {

  componentDidMount = () => {
    this.capitaliseName(this.props.pokemonList);
  };

  capitaliseName = (pokemonList) => {
    pokemonList.map(pokemon => {
      // console.log(pokemon.name);
    })
  };

  


  render = () => {
    return (
        <Card
          pokemonList={this.props.pokemonList}
        />
    );
  };
}

export default SisterCitiesContainer;
