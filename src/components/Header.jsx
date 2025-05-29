import { FilmIcon, MoonIcon, SearchIcon, } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <div className=" flex gap-2 text-indigo-700 pl-8 pt-8">
        <FilmIcon />
        <h2 className="italic font-bold text-lg ">Movie Z</h2>
        
      </div>
      <div className="flex gap-3 pt-6 pr-6 ">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border border-gray-400 rounded shadow "><SearchIcon/></button>
        
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border border-gray-400 rounded shadow"><MoonIcon/></button>
      </div>
    </div>
  );
};
