import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PokemonTypeList from './PokemonTypeList'
import PokemonStats from './PokemonStats'

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
        <div>
            <h1>#{this.state.number} {this.state.name.toUpperCase()}</h1>
            <PokemonTypeList types={this.state.types} />
            <PokemonStats stats={this.state.stats} />
            
            
        </div>
    )    
  }
}

export default PokemonInfo;