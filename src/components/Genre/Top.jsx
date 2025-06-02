import { StarIcon } from "lucide-react";

export const Top = ({ movie }) => {
  return (
    <div className="pt-20">
      <h3 className="text-2xl font-bold">{movie.original_title}</h3>
      <div className="flex justify-between">
        <p>2024.11.26 </p>
        <div className="pt-2">
          <div className="flex rounded-b-lg">
            <StarIcon className="text-yellow-300 fill-yellow-300" />
            {/* <p className="invisible md:visible">rating</p> */}
            <p className="w-[36] h-[16] pl-6px text-md">6.9</p>
            <div className="md:flex md:flex-col md:items-center">
              <p className="text-gray-500 text-md">/10</p>
              <p className="text-gray-500 text-md">37k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
