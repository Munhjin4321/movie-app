import { useState } from "react";
import { config } from "./config";

const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
export const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
      config
    );
    const movies = await response.json();
    setNowPlayingMovie(movies.results);
    return movies;
  } catch (error) {
    console.log(error);
  }
};
