import React, { Component } from 'react';

class PokemonStats extends Component {
  constructor(props){
    super(props)

    console.log(this.props.stats)
    
  }

  formatOutput(statName) {
    switch(statName) {
      case "speed":
        return "Speed"
      case "special-defense":
        return "Special Defense"
      case "defense":
        return "Defense"
      case "special-attack":
        return "Special Attack"
      case "attack":
        return "Attack"
      case "hp":
        return "HP"  
      default:
        return statName

    }
  } 

  createPokemonStats(){
    return this.props.stats.map(stat => 
      <li key={stat.stat.name}>{this.formatOutput(stat.stat.name)}: {stat.base_stat}</li>
    )
  }

  render() {

    let pokemonStats = this.createPokemonStats()

    return (      
      <div>
        <ul>{pokemonStats}</ul>
      </div>
    );
  }
}

export default PokemonStats;
