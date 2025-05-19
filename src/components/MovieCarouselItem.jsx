import { StarIcon } from "lucide-react";

export const Carousel = () => {
  return (
    <div className="w-fit">
      <img
        className="w-[375px] h-[246] md:w-[700px] md:h-[400px]"
        src="carousel.jpg"
      ></img>
      <div className="flex justify-between p-2 pt-3">
        <div className="flex-col ">
          <p>Now Playing</p>
          <h3 className="text-3xl font-bold pb-3">Wicked</h3>
        </div>
        <div className="flex pt-2">
          <StarIcon className="fill-yellow-400 text-yellow-400" />
          <p>6.9</p>
          <p className="text-[#71717A]">/10</p>
        </div>
      </div>
      <p className="w-[335px]">
        Elphaba, a misunderstood young woman bacause of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.
      </p>
    </div>
  );
};
