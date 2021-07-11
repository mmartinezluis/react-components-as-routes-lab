import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie,index) => (
          <div key={index}>
              <span>{movie.title}</span>
              <span>{movie.time}</span>
              <ul>
                {movie.genres.map( (genre,index) => <li key={index}>{genre}</li>)}
              </ul>
          </div>
        ))}
    </div>
  );

  
};



export default Movies;
