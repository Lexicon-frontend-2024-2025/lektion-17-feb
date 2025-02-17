"use server";

import { APIData, BasePoke, PokeFromApi } from "./interfaces";

// hämta från pokeapi
const API_BASE = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

export async function fetchPokemons(): Promise<BasePoke[]> {
    const response = await fetch(API_BASE);
    if (!response.ok) {
        throw new Error(`Error HTTP status: ${response.status}`);
    }
    const data: APIData = await response.json();

    if (!Array.isArray(data.results)) {
        throw new Error("Invalid data format received");
    }

    // https://pokeapi.co/api/v2/pokemon/25/
    // 
    // lägga till ett ID på alla våra pokemon-objekt
    const updatedPokes: BasePoke[] = data.results.map((pokemon) => ({
        ...pokemon, // behåller befintliga attribut
        id: Number(pokemon.url.split("/").slice(-2, -1)[0])
    }));

    return updatedPokes;

}