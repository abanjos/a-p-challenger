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
      <li key={stat.stat.name}>{this.formatOutput(stat.stat.name)}:&nbsp;
        <strong>{stat.base_stat}</strong>&nbsp;
      </li>
    )
  }

  
  createStatBars(){
    return this.props.stats.map(stat => 
        <StatBar key={stat.stat.name} statValue={stat.base_stat} />
    )
  }

  render() {

    let pokemonStats = this.createPokemonStats()

    let statBars = this.createStatBars()

    return (      
      <div className="PokemonStats">
        <ul className="PokemonStats-list">{pokemonStats}</ul>
        <div className="">{statBars}</div>
      </div>
    );
  }
}

export default PokemonStats;
