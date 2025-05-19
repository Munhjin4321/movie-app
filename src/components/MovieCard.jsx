import { StarIcon } from "lucide-react";

export const MovieCard = () => {
  return (
    <div className="w-fit">
      <div className="pb-6 pt-6">
        <h1 className="text-2xl font-bold">Upcoming</h1>
        {/* <p>See more</p> */}
      </div>
      <img
        className="w-[158px] h-[234px] md:w-[234px] md:h-[340px]"
        src="firstImage.jpg"
      ></img>
      <div className="bg-gray-200 p-2">
        <div className="flex gap-1 pt-2.5 pb-2.5">
          <StarIcon className="fill-yellow-400 text-yellow-400" />
          <p>6.9</p>
          <p className="text-[#71717A]">/10</p>
        </div>
        <p className="pb-8 text[#09090B] text-lg">Dear Santa</p>
      </div>
    </div>
  );
};
