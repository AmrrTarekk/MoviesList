import React, { useState } from "react";
import useMovie from "./useMovie";

function Movieform() {
  const [movieName, setMovieName] = useState("");
  const [rating, setRate] = useState("");
  const [duration, setDuration] = useState("");
  const [movieArray, setMovieArray] = useState([]);
  const { movies, setMovies } = useMovie();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movieName, rating, duration);
    let newObj = {};
    Object.assign(
      newObj,
      { title: movieName },
      { rating: rating },
      { duration: duration }
    );
    if (movieName && rating && duration) {
      movieArray.push(newObj);
      setMovies((prev) => [...prev, newObj]);
      console.log(movies);
    }
  };

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={handleSubmit}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              value={movieName}
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              onChange={(e) => setMovieName(e.target.value)}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              value={rating}
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              value={duration}
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
