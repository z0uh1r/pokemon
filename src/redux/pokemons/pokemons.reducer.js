import { POKEMONS_ACTION_TYPES } from "./pokemons.types";

const INITIAL_STATE = {
  pokemons: [],
  isFetching: false,
  error: null,
};

export const pokemonsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: payload,
        isFetching: false,
      };
    case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};
