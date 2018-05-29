import React, { Component } from 'react'

import PokemonButton from './PokemonButton'
import PaginationButton from './PaginationButton'

const api = 'https://pokeapi.co/api/v2'

class PokemonSelector extends Component {
  constructor(props){
    super(props)

    this.state = {
      actual: null,
      previous: null,
      next: null,
      list: []
    }
    this.getPokemonList(`${api}/pokemon`)
  } 
  
  getPokemonList = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => { 
        this.setState(
          { actual: url, previous: data.previous, next: data.next, list: data.results }
        )
      })
  }

  createPokemonButtons() {
    return this.state.list.map(pokemon =>
      <PokemonButton key={pokemon.name} url={pokemon.url} name={pokemon.name} /> 
    )
  }

  handlePreviuous = (e) => {
    e.preventDefault()
    if(this.state.previous !== null) {
      this.setState({ actual: this.state.previous })
      this.getPokemonList(this.state.previous)
    }
  }

  handleNext = (e) => {
    e.preventDefault()
    if(this.state.next !== null) {
      this.setState({ actual: this.state.next })
      this.getPokemonList(this.state.next)
    }
  }

  render() {

    let pokemonButtons = this.createPokemonButtons()

    return (
      <div className="Pokemon-Selector">
        {pokemonButtons}
        <div className="PaginationButtonGrid">
          <PaginationButton className="PaginationButtonPrevious" text="Previous" url={this.state.previous} onClickHandler={(e) => this.handlePreviuous(e)} />
          <PaginationButton className="PaginationButtonNext" text="Next" url={this.state.next} onClickHandler={(e) => this.handleNext(e)} />
        </div>
      </div>
    )
  }
}

export default PokemonSelector
