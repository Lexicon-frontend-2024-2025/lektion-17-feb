type PokemonCardProps = {
    name: string;
    url: string;
    id: number;
}

export default function PokemonCard({name, url, id}: PokemonCardProps) {
  return (
    <article>
        <h3>{name}, ID:{id}</h3>
    </article>
  )
}
