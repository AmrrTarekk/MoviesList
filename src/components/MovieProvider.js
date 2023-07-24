import React, { createContext, useState } from "react";

const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, filtered, setFiltered }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
