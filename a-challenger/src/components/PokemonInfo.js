import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PokemonTypeList from './PokemonTypeList'
import PokemonStats from './PokemonStats'
import PokeSprite from 'react-poke-sprites' 
import PokemonAbilities from './PokemonAbilities'

class PokemonInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            number: null,
            types: [],
            stats: [],
            abilities: [],
            sprites: [],
            isLoading: true
        }   
    }

    fetchPokemonData(url) {
        return fetch(url)
                .then(response => response.json())
                .then(data => this.setState({ 
                    name: data.name,
                    number: data.order,
                    types: data.types,
                    stats: data.stats,
                    abilities: data.abilities,
                    sprites: data.sprites
                }))
    }

    componentDidMount(){
        document.body.addEventListener('pokemonButtonClick', (e) => {
           this.fetchPokemonData(e.detail).then( () => this.setState( { isLoading: false } ))
        }, false)
    }
    
    componentWillUnmount() {
        document.body.removeEventListener('pokemonButtonClick')
    }


  render() { 
    if(this.state.isLoading)
        return (<div></div>)
        
    return ( 
        <div className="PokemonInfo">
            <h2>#{this.state.number} {this.state.name.toUpperCase()}</h2>
            <PokeSprite className="PokeSprite" pokemon={this.state.name}/>
            <div class="PokemonInfo-type-abilities-stats">
            <PokemonStats stats={this.state.stats} />
            <PokemonAbilities abilities={this.state.abilities} />          
            <PokemonTypeList types={this.state.types} />
            </div>

        </div>    
    )    
  }
}

export default PokemonInfo;