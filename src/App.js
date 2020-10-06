import React from 'react';
import Home from './components/Home'

import './App.css';

import { PokemonProvider } from './context/PokemonState'

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <Home />
      </div>
    </PokemonProvider>
  );
}

export default App;
