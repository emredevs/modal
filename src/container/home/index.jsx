import React, { useState, useEffect } from "react";
import PokeList from "../../components/pokemon-list";
import axios from "axios";
export default function PokeContainer() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards`)
      .then((res) => setPokemon(res.data.data));
  }, []);
  console.log(pokemon);
  return (
    <div>
      <PokeList pokemonInfo={pokemon} />
    </div>
  );
}
