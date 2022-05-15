import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { path, title, original_title, image } = props;
  return (
    <Link className="link" to={path}>
      <div className="movie">
        <img
          src={image}
          alt=""
          className="movie-banner"
          height={300}
          width={200}
        />
        <h3 className="movie-header">Title : {title}</h3>
        <h3 className="movie-header-original">
          Original Title : {original_title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCard;
