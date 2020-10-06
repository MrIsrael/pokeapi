import React, { createContext, useReducer} from 'react'
import axios from 'axios'
import PokemonReducer from '../context/PokemonReducer'

const initialState = {
  pokemonName: '',
  pokemonAbilities: [],
  order: '' 
}

export const PokemonContext = createContext(initialState)

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PokemonReducer, initialState)

  // Action GET
  const getPokemon = async (pokemon) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    dispatch({
      type: 'GET_POKEMON_INFO',
      payload: res
    })
  }

  return(
    <PokemonContext.Provider value={{
      pokemonName: state.pokemonName,
      getPokemon
    }}>
      { children }
    </PokemonContext.Provider>
  )

}