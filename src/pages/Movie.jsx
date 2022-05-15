import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Movie = () => {
  let { id } = useParams();
  let url = `https://ghibliapi.herokuapp.com/films/${id}`;
  const movie = useFetch(url);

  return (
    <div className="individual-movie">
      <div className="banner">
        <img src={movie.image} alt="" height={300} width={200} />
        <div>
          <h3 className="movie-header">
            {movie.title} ({movie.release_date})
          </h3>
          <h3 className="movie-header-original">{movie.original_title}</h3>
          <h4 className="directed-by">Directed by {movie.director}</h4>
          <h4 className="directed-by">Produced by {movie.producer}</h4>
          <p className="rt-score">Rotten Tomatoes : {movie.rt_score}%</p>
          <p className="rt-score">{movie.running_time} minutes</p>
          <p className="desc">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
