import css from './MovieDetails.module.css';

const MovieDetails = ({ movieInfo }) => {
  return (
    <div className={css.container}>
      <div className={css.poster}>
        {movieInfo.poster_path ? (
          <img
            width="300"
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />
        ) : (
          <p>No poster</p>
        )}
      </div>
      <div className={css.info}>
        <h2 className={css.title}>
          {movieInfo.title} ({new Date(movieInfo.release_date).getFullYear()})
        </h2>
        <p>User Score {Math.round(movieInfo.vote_average * 10)}</p>
        <h3>Overview</h3>
        <p>{movieInfo.overview}</p>
        <h3>Genres</h3>
        <p>
          {movieInfo.genres &&
            movieInfo.genres.map(genre => genre.name).join(' ')}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
