import React, { useState } from "react";
import useMovie from "./useMovie";

function Search() {
  const { movies, filtered, setFiltered } = useMovie();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // filter the list of movies based on query
    let filteredMovies = [];
    if (!!movies && !!query) {
      filteredMovies = [...movies].filter((movie) =>
        Object.values(movie).some((val) =>
          val.toString().toLowerCase().includes(query.trim())
        )
      );
      console.log("filtered", filteredMovies);
      setFiltered([...filteredMovies]);
      console.log("filtered state", filtered);
    } else {
      filteredMovies = [];
      // setQuery("");
      setFiltered([]);
    }
  };
  // console.log(query);

  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        value={query}
        onChange={handleSearch}
      />
    </section>
  );
}

export default Search;
