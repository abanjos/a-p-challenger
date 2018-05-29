import React, { Component } from 'react';

class PokemonAbilities extends Component {
  constructor(props){
    super(props)
  }

  createPokemonAbilities(){
    return this.props.abilities.map(ability => 
      <div key={ability.ability.name}>{ability.ability.name}</div>
    )
  }


  render() {

    let pokemonAbilities = this.createPokemonAbilities()

    return (      
      <div className="PokemonAbilities">
          <h3>Abilities: </h3>{pokemonAbilities}
      </div>
    );
  }
}

export default PokemonAbilities;
