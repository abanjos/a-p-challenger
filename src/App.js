import React, { Component } from 'react';

import PokemonSelector from './components/PokemonSelector';
import PokemonInfo from './components/PokemonInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonInfo />
        <PokemonSelector />        
      </div>
    );
  }
}

export default App;
