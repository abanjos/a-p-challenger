import React, { Component } from 'react';

class PokemonType extends Component {
  constructor(props){
    super(props)

    console.log(this.props.types)

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
