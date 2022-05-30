import { combineReducers } from "redux";

import { pokemonsReducer } from "./pokemons";

export const rootReducer = combineReducers({
  Pokemons: pokemonsReducer,
});
