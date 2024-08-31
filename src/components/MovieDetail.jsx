import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

export const MovieDetail = () => {
  const params = useParams();

  const movie = useSelector((store) => store.movies.MovieDetails);

  useMovieDetails(params.id);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img
            className="rounded"
            src={IMG_CDN_URL + movie?.poster_path}
            alt={movie?.title}
          />
        </div>
        <div className="max-w-2xl text-white text-lg ">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie?.title}
          </h1>
          <p className="my-4">{movie?.overview}</p>
          {movie?.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie?.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded  p-2"
                  key={genre?.id}
                >
                  {genre?.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-white ">{movie?.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full "></span>
            <span className="text-white ">{movie?.vote_count} reviews</span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie?.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie?.budget}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie?.revenue}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie?.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movie?.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {movie?.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
