import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { MovieCarousel } from "@/components/MovieCarousel";
import { MovieTrailer } from "@/components/MovieTrailer";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/Toprated";
import { Upcoming } from "@/components/Upcoming";


export default function Home() {

  return (
    <div className="container mx-auto overflow-hidden">
      <Header />
      <MovieCarousel />
      <MovieTrailer/>
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
