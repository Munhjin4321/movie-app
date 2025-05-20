import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { MovieCarousel } from "@/components/MovieCarousel";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
import { Upcoming } from "@/components/Upcoming";

export default function Home() {
  return (
    <div className="container mx-auto overflow-hidden">
      <Header/>
      <MovieCarousel />
      <div className="max-w-[1280px] w-screen mx-auto">
        <Upcoming />
      </div>
      {/* <MovieCard /> */}
    </div>
  );
}
