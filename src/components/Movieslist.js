import React, { useEffect } from "react";
import useMovie from "./useMovie";

function Movieslist() {
  const { filteredMovies, movies, setMovies } = useMovie();

  console.log("Fe eh filter", filteredMovies);
  const handleClose = (id) => {
    console.log(movies, id);
    setMovies(() => {
      return movies.filter((movie) => movie.id !== id);
    });
  };

  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {filteredMovies.map((movie, index) => (
          <li
            key={movie.id}
            className="flex slide-up-fade-in justify-content-between"
            style={{ borderBottom: "2px solid var(--primary-color)" }}
          >
            <div>
              <img
                alt="not found"
                width={"250px"}
                src={URL.createObjectURL(movie.selectedImage)}
              />
              <br />
            </div>
            <div className="layout-column w-40">
              {/* use this header for movie name */}
              <h3 className="my-3">{movie.name}</h3>
              {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
              <p className="my-0">{movie.rating}</p>
            </div>
            <div className="layout-row my-auto mr-20">
              {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
              <p className="justify-content-end">{movie.duration}</p>
            </div>
            <button onClick={() => handleClose(movie.id)}>close</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Movieslist;
