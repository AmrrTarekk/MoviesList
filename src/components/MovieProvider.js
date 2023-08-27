import React, { createContext, useEffect, useState } from "react";

const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");

  const handleAddMovie = (movieName, rating, duration, selectedImage = "") => {
    setMovies((movies) => [
      ...movies,
      {
        name: movieName,
        rating,
        duration,
        id: crypto.randomUUID(),
        selectedImage,
      },
    ]);
    console.log(movies, "moviesContext");
  };

  let filteredMovies = movies;

  if (query.length >= 2) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.name.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  return (
    <MovieContext.Provider
      value={{
        handleAddMovie,
        filteredMovies,
        query,
        movies,
        setMovies,
        setQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
