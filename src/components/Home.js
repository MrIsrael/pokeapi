import React, { Fragment, useContext } from 'react'

import { PokemonContext } from '../context/PokemonState'

const Home = () => {
  const { pokemonName, getPokemon } = useContext(PokemonContext)

  return(
    <Fragment>
      <h1>Buscador de Pokemones</h1>

      <input type='text' size='50' />
      <button onClick={getPokemon('pikachu')}>Clic para buscar</button>
    </Fragment>
  )

}

export default Home
