import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { apiMovieDetails } from '../../services/api';
import { useEffect, useState } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import BackLink from '../../components/BackLink/BackLink';

function MovieDetailsPage() {
  const movieId = useParams().movieId;
  const [movieInfo, setMovieInfo] = useState({});
  const [errorText, setErrorText] = useState('');
  const location = useLocation();
  const backLinkHref = location.state ?? '/movies';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const res = await apiMovieDetails(movieId);
        setMovieInfo(res);
      } catch (error) {
        console.error(error);
        setErrorText(error.message);
      }
    };
    getMovieDetails();
    return () => {};
  }, [movieId]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <div>
        <BackLink to={backLinkHref}>← Go back</BackLink>
      </div>
      {!errorText && <MovieDetails movieInfo={movieInfo} />}
      <hr />
      <h3>Additional information</h3>
      <nav className={css.nav}>
        <NavLink to={`cast`} className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to={`reviews`} className={buildLinkClass}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
