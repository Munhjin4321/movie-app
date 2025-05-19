import { MovieCard } from "@/components/MovieCard";
import { Carousel } from "@/components/MovieCarouselItem";

export default function Home() {
  return (
    <div>
      <Carousel/>
      <MovieCard />
    </div>
  );
}
