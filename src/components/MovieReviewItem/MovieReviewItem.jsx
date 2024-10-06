const MovieReviewItem = ({ review }) => {
  return (
    <li key={review.id}>
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </li>
  );
};

export default MovieReviewItem;
