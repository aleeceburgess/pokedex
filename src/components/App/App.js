import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Loader from '../Loader/Loader';
import CardContainer from '../Card/CardContainer';
import PokemonInfoContainer from '../PokemonInfo/PokemonInfoContainer';

import Pokemon from '../../utilities/GetPokemon'

class App extends React.Component {
  constructor(props){
   super(props);

   this.state = {
      pokemonList: null,
      activePokemon: null
   }
}

  componentDidMount = async () => {
    this.setState({
      pokemonList: await Pokemon()
    })
  }

  handleCardClick = (e) => {
    if(e.currentTarget.dataset.id === this.state.activePokemon) {
      this.setState({
        activePokemon: null
      });
    } else {
      this.setState({
        activePokemon: e.currentTarget.dataset.id
      });
    }
  }

  render = () => {
    if (!this.state.pokemonList) {
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
            pokemonList={this.state.pokemonList} 
            activePokemon={this.state.activePokemon}
            handleCardClick={this.handleCardClick}
          />
          <PokemonInfoContainer 
            pokemonList={this.state.pokemonList} 
            activePokemon={this.state.activePokemon}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
