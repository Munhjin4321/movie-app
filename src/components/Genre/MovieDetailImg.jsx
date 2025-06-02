export const MovieDetailImg = ({ movie }) => {
  return (
    <div className="flex flex-col gap-5 sm:flex-row w-full ">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          className="h-[428px] w-[290px]"
        />
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          className="h-[428px] w-[760px]"
        />
      </div>
    </div>
  );
};
