import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiMovieReviews } from '../../services/api';
import MovieReviewItem from '../MovieReviewItem/MovieReviewItem';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const res = await apiMovieReviews(movieId);
        // console.log(res);
        setReviews(res.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
    return () => {};
  }, [movieId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {reviews.length === 0 && (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
      <ul>
        {reviews.map(review => (
          <MovieReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
};

export default MovieReviews;
