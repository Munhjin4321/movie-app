import { MoreLikeThis } from "@/components/Genre/MoreLikeThis";
import { Top } from "@/components/Genre/Top";
import { MovieTrailer } from "@/components/MovieTrailer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDetails } from "../../../utils/getDetails";
import { MovieDetailImg } from "@/components/Genre/MovieDetailImg";

export const DetailPage = () => {
  const [movie, setMovie] = useState({});
  const router = useRouter();
  const movieId = router.query.movieId;
  // console.log('movie id', movieId);

  useEffect(() => {
    if (!movieId) return;
    const getDetailPage = async () => {
      const response = await getDetails(movieId);
      setMovie(response);
    };
    getDetailPage();
  }, [movieId]);

  return (
    <div className="container mx-auto overflow-hidden max-w-1280px px-2 py-4">

      <Top movie={movie} />
      <MovieDetailImg movie={movie}/>
      <MovieTrailer movieId={movie.id} />
      <div className="flex gap-4">{/* <Genre movie={movie}/> */}</div>
      <MoreLikeThis movieId={movie.id} />
     
    </div>
  );
};
export default DetailPage;
