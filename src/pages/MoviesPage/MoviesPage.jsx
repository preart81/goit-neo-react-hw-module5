import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { apiSearch } from '../../services/api';
import { useEffect, useState } from 'react';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  const query = params.get('query') ?? '';

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const res = await apiSearch(query);
      setMoviesList(res);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    return () => {
      // setParams({});
    };
  }, [query]);

  // console.log(params);

  const handleParamChange = e => {
    e.preventDefault();
    params.set('query', e.target.query.value);
    setParams(params);
    e.target.reset();

    const query = params.get('query') ?? '';
    if (!query) {
      return;
    }

    getMovies();
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleParamChange}>
        <input
          type="text"
          name="query"
          defaultValue={params.get('query') || ''}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      <ul>
        <MovieList moviesList={moviesList} />
      </ul>
    </>
  );
};

export default MoviesPage;
