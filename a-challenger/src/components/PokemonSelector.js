import React, { Component } from 'react';

import PokemonButton from './PokemonButton';

const api = 'https://pokeapi.co/api/v2';

class PokemonSelector extends Component {
  constructor(props){
    super(props);

    this.state = {
      actual: null,
      previous: null,
      next: null,
      list: []
    }
  } 
  
  componentDidMount() {
    const url = this.state.actual == null ? `${api}/pokemon` : this.state.actual;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ actual: url, previous: data.previous, next: data.next, list: data.results }));
  }

  async getPokemonsList() {
    return fetch(`${api}pokemon`)
      .then(response => response.json());
  }

  createPokemonButtons() {
    return this.state.list.map(pokemon =>
      <PokemonButton key={pokemon.name} url={pokemon.url} /> 
    );
  }

  render() {

    let pokemonButtons = this.createPokemonButtons();

    return (
      <div className="Pokemon-Selector">
        {pokemonButtons}
      </div>
    );
  }
}

export default PokemonSelector;
