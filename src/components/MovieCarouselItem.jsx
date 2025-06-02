import { PlayIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { MovieTrailer } from "./MovieTrailer";
export const MovieCarouselItem = ({ movie }) => {
  return (
    <div>
      <div className=" md:flex md:relative ">
        <Link href={`/details/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            className="h-[246px] w-screen md:h-[600px] object-cover"
          />
        </Link>

        <div className="w-[375px] h-[264px] p-2 md:absolute  md:w-[404px] md:h-[264px] md:py-[140px] md:px-[60px]">
          <div className="flex justify-between p-2 md:flex-col">
            <div className="md:text-white">
              <p className="text-sm ">Now Playing:</p>
              <h3 className="text-2xl text-white font-bold">{movie.title}</h3>
            </div>
            <div className="flex p-2 ">
              <StarIcon className="text-yellow-300 fill-yellow-300 " />
              <p className="w-[36] h-[16] pl-6px text-lg md:text-white">
                {movie.vote_average}
              </p>

              <p className="text-gray-500 text-lg">/10</p>
            </div>
          </div>
          <div className="md:text-white md:w-[302px] md:[80px] pt-4">
            <p>{movie.overview} </p>
            <div className="flex pt-6">
              <button className=" flex gap-2 text-white md:text-black bg-black md:bg-white hover:bg-gray-900 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 ">
                {""}
                <PlayIcon className="pt-1 gap-2 pb-1" />{" "}
                <MovieTrailer movieId={movie.id} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
