import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [pokemons, setPokemons] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getPokemons() {
      if (!isFetching) {
        setIsFetching(true);

        try {
          const res = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=60"
          );

          setPokemons(res.data.results);
        } catch (err) {
          console.log(err);
        } finally {
          setIsFetching(false);
        }
      }
    }

    getPokemons();
  }, []);

  if (isFetching) return <h2>Loading ...</h2>;

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-10">
        Welcome to pokemon
      </h1>

      <div className="grid grid-cols-4 gap-4 justify-center	align-center justify-items-center">
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <div
              key={index}
              className="flex flex-col align-center justify-center border border-x-1 border-y-1 py-3 px-5 rounded-xl border-gray-600"
            >
              <img
                className="block w-40 max-w-4"
                src={require(`./images/${pokemon.name}.jpg`)}
                alt={pokemon.name}
              />
              <h4 className="font-bold text-center mt-5">{pokemon.name}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}
