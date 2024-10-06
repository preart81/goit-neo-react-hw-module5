import { useSearchParams } from 'react-router-dom';
import { apiSearch } from '../../services/api';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  const query = params.get('query') ?? '';

  iziToast.settings({
    position: 'topRight',
    transitionIn: 'bounceInDown',
  });

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
    if (!query) {
      return;
    }
    getMovies();
    return () => {};
  }, [query]);

  // console.log(params);

  const handleParamChange = e => {
    e.preventDefault();
    const queryText = e.target.query.value.trim();

    if (!queryText) {
      e.target.reset();
      iziToast.error({
        // title: 'Error',
        message: 'Please enter a query',
      });
      return;
    }
    params.set('query', queryText);
    setParams(params);
    e.target.reset();
    getMovies();
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleParamChange}>
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          // defaultValue={params.get('query') || ''}
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
