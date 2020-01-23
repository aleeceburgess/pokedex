import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Loader from '../Loader/Loader';
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
        <Row>
          <CardContainer pokemonList={this.state.pokemonList} />
        </Row>
      </Container>
    );
  }
}

export default App;
