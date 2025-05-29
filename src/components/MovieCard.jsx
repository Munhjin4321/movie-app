import { StarIcon } from "lucide-react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="w-fit">
      <img
        className="w-[158px] h-[234px] object-cover rounded-t-lg md:w-[234px] md:h-[340px]"
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
      ></img>
      <div className="bg-gray-200 p-2 rounded-b-lg">
        <div className="flex gap-1 pt-2.5 pb-2.5">
          <StarIcon className="fill-yellow-400 text-yellow-400 " />
          <p className="md:text-3">6.9</p>
          <p className="text-[#71717A]">/10</p>
        </div>
        <p className="pb-8 text[#09090B] text-lg"> {movie.title} </p>
      </div>
    </div>
  );
};
