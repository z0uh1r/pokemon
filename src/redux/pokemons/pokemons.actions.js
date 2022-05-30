import { fetchPokemons } from "../../models/pokemons";
import { POKEMONS_ACTION_TYPES } from "./pokemons.types";

const createAction = (type, payload) => ({ type, payload });

export const fetchPokemonsStart = () => {
  return createAction(POKEMONS_ACTION_TYPES.FETCH_POKEMONS_START);
};

export const fetchPokemonsSuccess = (pokemonsArray) => {
  return createAction(
    POKEMONS_ACTION_TYPES.FETCH_POKEMONS_SUCCESS,
    pokemonsArray
  );
};

export const fetchPokemonsFailed = (error) => {
  return createAction(POKEMONS_ACTION_TYPES.FETCH_POKEMONS_FAILED, error);
};

export const fetchPokemonsAsync = () => async (dispatch) => {
  dispatch(fetchPokemonsStart());

  try {
    const pokemons = await fetchPokemons();
    dispatch(fetchPokemonsSuccess(pokemons));
  } catch (err) {
    console.log(err);
    dispatch(fetchPokemonsFailed(err));
  }
};
