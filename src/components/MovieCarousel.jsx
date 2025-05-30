import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCarouselItem } from "./MovieCarouselItem";

import Autoplay from "embla-carousel-autoplay";
import { getNowPlaying } from "../../utils/getNowPlaying";
import { useEffect, useState } from "react";

export const MovieCarousel = () => {

  

  const [carousel, setCarousel] = useState([]);
  useEffect(() => {
    const getCarousel = async () => {
      const response = await getNowPlaying();
      // console.log("carousel;", response);
      setCarousel(response?.results);
    };
    getCarousel();
  }, []);
  console.log("jjj;", carousel )


  return (
    <Carousel
    // className="relative"
    // plugins={[
    //   Autoplay({
    //     delay: 2000,
    //   }),
    // ]}
    >
      <CarouselContent>
        {carousel?.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="p-4">
              <MovieCarouselItem movie={movie} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" md:left-4" />
      <CarouselNext className=" md:right-4 " />
    </Carousel>
  );
};
