import { useContext } from "react";
import MovieContext from "./MovieProvider";

const useMovie = () => {
  return useContext(MovieContext);
};

export default useMovie;
