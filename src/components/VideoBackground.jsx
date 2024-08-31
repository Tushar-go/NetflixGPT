import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-full ">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?controls=0&autoplay=1&mute=1&rel=0&loop=1&modestbranding=1&showinfo=0"
        }
        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackground;