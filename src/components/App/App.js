import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Loader from '../Loader/Loader';
import CardContainer from '../Card/CardContainer';
import PokemonInfoContainer from '../PokemonInfo/PokemonInfoContainer';

import Pokemon from '../../utilities/GetPokemon'

const App = () => {

  const [pokemonList, setPokeonList] = useState(null);
  const [activePokemon, setActivePokemon] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      setPokeonList(await Pokemon());
    }
    loadPokemon();
  }, []);

  const handleCardClick = (e) => {
    if(e.currentTarget.dataset.id === activePokemon) {
      setActivePokemon(null);
    } else {
      setActivePokemon(e.currentTarget.dataset.id);
    }
  }

  if (!pokemonList) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="col-12 pokedex-heading">Pokédex</h1>
        </Col>
      </Row>
      <Row
        className="cardGrid"
      >
        <CardContainer 
          pokemonList={pokemonList} 
          activePokemon={activePokemon}
          handleCardClick={handleCardClick}
        />
        <PokemonInfoContainer 
          pokemonList={pokemonList} 
          activePokemon={activePokemon}
        />
      </Row>
    </Container>
  );
}

export default App;
