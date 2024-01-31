import { usePokemonDetailQuery } from "../store/apiSlice";

const listFormatter = new Intl.ListFormat("en-GB", {
  style: "short",
  type: "conjunction",
});

export default function PokemonDetails({ pokemonName }) {
  const { data, isLoading, isError, isSuccess } = usePokemonDetailQuery({
    pokemonName: pokemonName,
  });
  if (isLoading) {
    return "loading...";
  }
  if (isError) {
    return "Something went wrong";
  }
  if (isSuccess) {
    return (
      <article>
        <h2>{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} />
        <ul>
          <li>id: {data.id}</li>
          <li>height: {data.height}</li>
          <li>weight: {data.weight}</li>
          <li>
            types:
            {listFormatter.format(data.types.map((item) => item.type.name))}
          </li>
        </ul>
      </article>
    );
  }
}
