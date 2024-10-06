
const ActorCard = ({actor}) => {
  return (
    <li>

      {actor.profile_path && <img
        width="150"
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />}
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
    </li>
  );
}

export default ActorCard