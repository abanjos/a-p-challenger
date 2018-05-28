import React, { Component } from 'react';

import StatBar from './StatBar'

class PokemonStats extends Component {
  constructor(props){
    super(props)
    
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
      <li key={stat.stat.name}>{this.formatOutput(stat.stat.name)}:
        <strong>{stat.base_stat}</strong>&nbsp;
        <StatBar statValue={stat.base_stat} />
      </li>
    )
  }

  render() {

    let pokemonStats = this.createPokemonStats()

    return (      
      <div className="PokemonStats">
        <ul className="PokemonStats-list">{pokemonStats}</ul>
      </div>
    );
  }
}

export default PokemonStats;
