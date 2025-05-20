import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

export const Upcoming = () => {
  return (
    <div>
      <div className="pb-6 pt-14 flex justify-between">
        <h1 className="text-3xl text-foreground font-bold pl-5">Upcoming</h1>
        <button className="flex pt-1 px-6 text-md gap-2 bg-background ">See more <ArrowRight /> </button>
        
      </div>
      <div className="grid grid-cols-2 px-5 gap-5 md:grid-cols-3 lg:grid-cols-5 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieCard />
        ))}
      </div>
    </div>
  );
};
