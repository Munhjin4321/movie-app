import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { getUpcoming } from "../../utils/getUpcoming";

export const Upcoming = ({movie}) => {
  const [upComing, setUpcoming] = useState ([]);
    useEffect(() => {
      
      const getComing = async () => {
        const response = await getUpcoming();
        setUpcoming(response);
      };
      getComing();
    }, []);
    // console.log("uppppp",  upComing)
  return (
    <div>
      <div className="pb-6 pt-14 flex justify-between">
        <h1 className="text-3xl text-foreground font-bold pl-5">Upcoming</h1>
        <button className="flex pt-1 px-6 text-md gap-2 bg-background ">See more <ArrowRight /> </button>
        
      </div>
      <div className="grid grid-cols-2 px-5 gap-5 md:grid-cols-3 lg:grid-cols-5 ">
        {upComing?.results?.slice(0, 10).map((movie, index) => (
          <MovieCard key={index} movie={movie}/>
        ))}
      </div>
    </div>
  );
};
