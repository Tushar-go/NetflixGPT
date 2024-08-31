import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] md:pt-[15%] px-6 md:px-24  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 flex">
        <button className=" bg-white text-black py-1 md:py-2 px-3 md:px-10 md:text-xl text-lg font-medium rounded-lg hover:bg-opacity-80 flex items-center gap-2">
        <FaPlay />    Play
        </button>
        <button className="hidden  mx-2  bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg md:flex md:items-center md:gap-2">
       <FaInfoCircle />    More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;