import React, { Component } from 'react';
import ReactDOM from 'react-dom';



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
                    type: data.types,
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
            <PokemonType types={this.state.types} />
            <PokeSprite  pokemon={this.props.name} />
            <PokemonStats stats={this.props.stats} />
            <PokemonAbilities abilities={this.props.abilities} />
        </div>
    )    
  }
}

export default PokemonInfo;