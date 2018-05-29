import React, { Component } from 'react';

class PokemonType extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (      
      <div className={`Type ${this.props.name}Type`}>
        {this.props.name}
      </div>
    );
  }
}

export default PokemonType;
