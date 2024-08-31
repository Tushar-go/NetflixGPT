import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const {id, poster_path} = movie;
  if (!poster_path) return null;
  return (
    <Link to={`/movie/${id}`}>
    
    <div className="w-36 md:w-48 pr-4 transform shadow-xl transition duration-300 hover:scale-105 ">
      <img  alt="Movie Card" src={IMG_CDN_URL + poster_path} />
    </div>
    </Link>
  );
};
export default MovieCard;