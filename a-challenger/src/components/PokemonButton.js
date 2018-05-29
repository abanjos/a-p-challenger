import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PokemonButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      iconUrl: null

    }
  }

  componentDidMount() {
    const id = this.extractIdFromUrl(this.props.url);
    this.setState({ 
      iconUrl: this.createIconUrl(id)
    })
  }

  extractIdFromUrl(url) {
    const regex = new RegExp(/https\:\/\/pokeapi\.co\/api\/v2\/pokemon\/([\d]+)\//g);
    const match = regex.exec(url)
    return match[1]
  }

  createIconUrl(id){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  handleClick(event) {
    event.preventDefault();
    const pokemonButtonClick = new CustomEvent(
      'pokemonButtonClick', { detail: this.props.url } 
    );

    document.body.dispatchEvent(pokemonButtonClick);
    
  }

  render() {
    return (      
        <a 
        className="PokemonButton" 
        onClick={(e) => this.handleClick(e)}>
          <img src={this.state.iconUrl} />
          <span>{this.props.name}</span>
        </a>
    );
  }
}

export default PokemonButton;
