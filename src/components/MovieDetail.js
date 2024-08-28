import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useParams, useHistory } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const history = useHistory();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe src={movie.trailerUrl} title={movie.title}></iframe>
      <button onClick={() => history.push('/')}>Back to Home</button>
    </div>
  );
}

export default MovieDetail;
