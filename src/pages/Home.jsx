import React from "react";
import { useFetch } from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";

const Home = () => {
  let url = "https://ghibliapi.herokuapp.com/films";
  const movies = useFetch(url);
  return (
    <div className="home-main">
      {movies.map((movie, index) => {
        return (
          <MovieCard
            path={`/movie/${movie.id}`}
            key={index}
            title={movie.title}
            original_title={movie.original_title}
            image={movie.image}
          />
        );
      })}
    </div>
  );
};

export default Home;
