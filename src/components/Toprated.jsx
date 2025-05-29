import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { getTopRated } from "../../utils/getTopRated";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const getTopRated = async () => {
      const response = await getTopRated();
      setTopRatedMovies(response.results);
    };
    getTopRated();
  }, []);
  return (
    <div>
      <div className="pb-6 pt-14 flex justify-between">
        <h1 className="text-3xl text-foreground font-bold pl-5">Top Rated</h1>
        <button className="flex pt-1 px-6 text-md gap-2 bg-background ">
          See more <ArrowRight />{" "}
        </button>
        {/* <Link href={"/category/popular"}></Link> */}
      </div>
      <div className="grid grid-cols-2 px-5 gap-5 md:grid-cols-3 lg:grid-cols-5 ">
        {topRatedMovies.slice(0, 10).map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
