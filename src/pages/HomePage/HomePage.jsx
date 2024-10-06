import { useEffect, useState } from 'react';
import { apiTrending } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

function HomePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        setIsLoading(true);
        const res = await apiTrending();
        // console.log(res);
        setMoviesList(res.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    trendingMovies();
    // console.log(moviesList);

    return () => {};
  }, []);

  return (
    <>
      <div>Trending today</div>
      {isLoading && <p>Loading...</p>}

      <MovieList moviesList={moviesList} />
    </>
  );
}

export default HomePage;
