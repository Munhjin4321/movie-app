import { FilmIcon, MoveIcon } from "lucide-react";

export const Header = () => {
  return (
    <div>
      <div className=" flex gap-2 text-indigo-700 pl-8 pt-8">
        <FilmIcon />
        <h2 className="italic font-bold text-lg ">Movie Z</h2>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};
