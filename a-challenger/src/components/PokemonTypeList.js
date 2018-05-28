import React, { Component } from 'react';

import PokemonSelector from './PokemonSelector';
import PokemonType from './PokemonType';

class PokemonTypeList extends Component {
    constructor(props){
       super(props) 
    }

    createPokemonType(){
      return this.props.types.map(type => <PokemonType key={type.type.name} name={type.type.name} />
      )        
    }  

  render() {

    let pokemonTypes = this.createPokemonType();

    return (      
      <div>
        {pokemonTypes}
      </div>
    );
  }
}

export default PokemonTypeList;
