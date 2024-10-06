import { useParams } from 'react-router-dom';
import { apiMovieCast } from '../../services/api';
import { useEffect, useState } from 'react';
import ActorCard from '../ActorCard/ActorCard';

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
      <ul>
        {cast.map(actor => (
          <ActorCard actor={actor} key={actor.id} />
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
