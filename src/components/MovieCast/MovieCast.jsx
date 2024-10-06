import { useParams } from 'react-router-dom';
import { apiMovieCast } from '../../services/api';
import { useEffect, useState } from 'react';
import ActorCard from '../ActorCard/ActorCard';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const res = await apiMovieCast(movieId);
        setCast(res.cast);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();

    return () => {};
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={css.castList}>
        {cast.map(actor => (
          <li className={css.castItem} key={actor.id}>
            <ActorCard actor={actor} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
