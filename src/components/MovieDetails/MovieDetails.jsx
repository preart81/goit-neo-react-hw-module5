const MovieDetails = ({ movieInfo }) => {
  return (
    <div>
      
      { movieInfo.poster_path ?
      <img
        width="300"
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt={movieInfo.title}
        />:
      <p>No poster</p> }
      <h2>
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
  );
};

export default MovieDetails;
