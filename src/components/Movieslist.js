import React, { useEffect } from "react";
import useMovie from "./useMovie";

function Movieslist() {
  const { filtered, movies } = useMovie();
  console.log(filtered, "alooo");
  useEffect(() => {
    console.log("change");
  }, []);
  const show = movies;
  console.log(show, "show");

  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {show.map((movie, index) => (
          <li
            key={index}
            className="flex slide-up-fade-in justify-content-between"
            style={{ borderBottom: "2px solid var(--primary-color)" }}
          >
            <div className="layout-column w-40">
              {/* use this header for movie name */}
              <h3 className="my-3">{movie.title}</h3>
              {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
              <p className="my-0">{movie.rating}</p>
            </div>
            <div className="layout-row my-auto mr-20">
              {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
              <p className="justify-content-end">{movie.duration}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Movieslist;
