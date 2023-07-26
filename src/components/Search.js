import React, { useState } from "react";
import useMovie from "./useMovie";

function Search() {
  const { query, setQuery } = useMovie();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

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
