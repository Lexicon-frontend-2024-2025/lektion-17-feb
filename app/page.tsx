"use client"
import { fetchPokemons } from "@/actions";
import PokemonCard from "@/components/pokemon-card";
import { BasePoke } from "@/interfaces";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<BasePoke[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // när komponenten laddas in för första gången, skall vi fetcha pokemons
    const loadData = async () => {
      try {
        const data = await fetchPokemons();
        setPokemons(data);
      } catch (err) {
        setError("Det blev något galet när vi hämtade pokemons. Försök senare.");
        console.error("Error fetching: ", err);
      }
    };

    loadData();
  }, []);

  // visa felet för användaren:
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Pokémons</h1>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} name={pokemon.name} url={pokemon.url} id={pokemon.id} />
      ))}
    </main>
  );
}
