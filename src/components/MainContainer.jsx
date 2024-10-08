import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-12 md:pt-0 mb-6 md:mb-12 overflow-x-hidden">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};


export default MainContainer;