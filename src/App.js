import React from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";
import useMovie from "./components/useMovie";

const title = "Favorite Movie Directory";
// https://github.com/anjantalatam/favorite-movie-directory-hackerrank
function App() {
  const { filteredMovies } = useMovie();
  console.log(filteredMovies);
  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform />
        </div>
        <div className="layout-column w-30">
          <Search />
          {filteredMovies.length === 0 ? (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          ) : (
            <Movieslist />
          )}
          {/* {filteredMovies === [] ? (
            <Movieslist />
          ) : (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default App;
