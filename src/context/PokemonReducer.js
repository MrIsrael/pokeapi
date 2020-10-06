export default (state, action) => {
  switch(action.type) {
    case 'GET_POKEMON_INFO':
      return {
        ...state,
        pokemonName: action.payload
      }
    default:
      return state
  }
}