import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pokeapi.co/api/v2/`,
  }),
  endpoints: (build) => ({
    pokemonList: build.query({
      query() {
        return {
          method: "GET",
          url: "pokemon",
          params: {
            limit: 9,
          },
        };
      },
    }),
    pokemonDetail: build.query({
      query({ pokemonName }) {
        return `pokemon/${pokemonName}/`;
      },
    }),
  }),
});

export const { usePokemonListQuery, usePokemonDetailQuery } = apiSlice;
