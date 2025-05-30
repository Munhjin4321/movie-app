import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getMovieTrailer } from "../../utils/getMovieTrailer";
import { Button } from "./ui/button";

export const MovieTrailer = ({movieId}) => {
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const getMovieTrailerById = async() =>{
      if(!movieId)
        return;
      try{
        console.log("end movie bna");
        const data = await getMovieTrailer(movieId);
        console.log("this is data", data);
        
        setTrailer(data?.results);
      }catch (error){
        console.error("Failed to fetch movie trailer",error);
      }
    };
    getMovieTrailerById();


  },[movieId]);
  const movieTrailer = trailer?.find(
    (video) => video.name === "Official Trailer"
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="">Watch Trailer</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-fit">
        <div>
          <YouTube
          className="h-full w-full"
          videoId={movieTrailer?.key}
            opts={{
              height: "390",
              width: "640",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
