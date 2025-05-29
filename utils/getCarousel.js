import { config } from "./config";

export const getCarousel = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
      config
    );
    const data = await response.json();
    console.log("carousel", data)
    return data;
  } catch (error) {
    console.log(error);
  }
};
