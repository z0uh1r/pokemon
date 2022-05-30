import { apiClient } from "../apiClient";

export async function fetchPokemons() {
  const res = await apiClient.get("/pokemon?limit=60");
  return res.data.results;
}
