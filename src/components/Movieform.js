import React, { useEffect, useRef, useState } from "react";
import useMovie from "./useMovie";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Movieform() {
  const nameRef = useRef();

  const [movieName, setMovieName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [rating, setRate] = useState("");
  const [duration, setDuration] = useState("");
  const [err, setErr] = useState(false);
  const { handleAddMovie } = useMovie();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(movieName, rating, duration);
  //   let newObj = {};
  //   Object.assign(
  //     newObj,
  //     { title: movieName },
  //     { rating: rating },
  //     { duration: duration }
  //   );
  //   if (movieName && rating && duration) {
  //     movieArray.push(newObj);
  //     setMovies((prev) => [...prev, newObj]);
  //     console.log(movies);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieName === "" || rating === "" || duration === "") {
      setErr(true);
      return;
    }
    handleAddMovie(movieName, rating, duration);
    console.log(movieName, rating, duration);
    setMovieName("");
    setRate("");
    setDuration("");
  };

  // useEffect(() => {}, []);
  useEffect(() => {
    nameRef.current.focus();
    console.log(nameFocus);
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(movieName);
    console.log(result);
    setValidName(result);
  }, [movieName]);

  useEffect(() => {
    if (movieName !== "" || rating !== "" || duration !== "") {
      setErr(false);
    }
  }, [movieName, rating, duration]);

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
              ref={nameRef}
              required
              autoComplete="off"
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              onChange={(e) => setMovieName(e.target.value)}
            />
            <p
              className={!validName && nameFocus ? "instructions" : "offscreen"}
            >
              Invalid Name
            </p>
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              required
              type="number"
              id="ratings"
              autoComplete="off"
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
              required
              autoComplete="off"
              value={duration}
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {err && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}

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
