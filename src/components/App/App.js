import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardContainer from '../Card/CardContainer';

import Pokemon from '../../utilities/GetPokemon'

class App extends React.Component {
  constructor(props){
   super(props);

   this.state = {
      pokemonList: null
   }
}

  componentDidMount = async () => {
    this.setState({
      pokemonList: await Pokemon()
    })
  }

  render = () => {
    if (!this.state.pokemonList) {
      return <p>Loading</p>;
    }
    return (
      <Container>
        <Row>
          <h1>Pokédex</h1>
        </Row>
        <Row>
          <CardContainer pokemonList={this.state.pokemonList} />
        </Row>
      </Container>
    );
  }
}

export default App;
