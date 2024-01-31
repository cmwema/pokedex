import { usePokemonListQuery } from "../store/apiSlice";

export default function PokemonList({ onPokemonSelected }) {
  const { data, isLoading, isError, isSuccess } = usePokemonListQuery();
  if (isLoading) {
    return "loading...";
  }
  if (isError) {
    return "Something went wrong";
  }
  if (isSuccess) {
    return (
      <article>
        <h2>Overview</h2>
        <ol start={1}>
          {data.results.map((pokemon) => (
            <li key={pokemon.name}>
              <button onClick={() => onPokemonSelected(pokemon.name)}>
                {pokemon.name}
              </button>
            </li>
          ))}
        </ol>
      </article>
    );
  }
}
