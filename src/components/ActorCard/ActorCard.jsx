import css from './ActorCard.module.css';

const ActorCard = ({ actor }) => {
  return (
    <>
      {actor.profile_path ? (
        <img
          width="200"
          height="300"
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
        />
      ) : (
        <img
          width="200"
          height="300"
          src="https://via.placeholder.com/200x300?text=No+Image"
          alt="No image available"
        />
      )}
      <p className={css.name}>{actor.name}</p>
      <p className={css.character}>Character: {actor.character}</p>
    </>
  );
};

export default ActorCard;
