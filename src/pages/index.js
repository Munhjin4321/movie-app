import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { MovieCarousel } from "@/components/MovieCarousel";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/Toprated";
import { Upcoming } from "@/components/Upcoming";
import { useEffect, useState } from "react";

export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

  const getNowPlayingMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,

        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      // console.log("caraousel", movies);
      setNowPlayingMovie(movies.results);
      return movies;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovie();
  });
  return (
    <div className="container mx-auto overflow-hidden">
      <Header />
      <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      <div className="max-w-[1280px] w-screen mx-auto">
        <Upcoming />
        <Popular />
        <TopRated />
        <Footer />
      </div>
      {/* <MovieCard /> */}
    </div>
  );
}
