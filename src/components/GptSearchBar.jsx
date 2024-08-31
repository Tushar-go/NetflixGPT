import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { addGptMovieResult } from "../utils/gptSlice";
import runChat from "../utils/gemini";
import { FiSearch } from "react-icons/fi";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const [loading, setLoading] = useState(false);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingTextOptions = ["Loading..⌛", "Connecting..🔗", "Exploring..🔍", "Unleashing..🔥", "Revealing..🎭"];

  
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    setLoading(true);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const onSent = async (prompt) => {
      const { tmdbResults, gptMovies } = await runChat(prompt);
      setLoading(false);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    };
    

    onSent(gptQuery);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingTextIndex((prevIndex) => (prevIndex + 1) % loadingTextOptions.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[35%] md:pt-[10%] flex flex-col items-center justify-center gap-4 mx-6 md:mx-0">
      <div>
        <h1 className="text-white text-[17px] md:text-5xl font-extrabold mb-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
          Discover <span className="text-purple-500">Your Next</span> Favorite{" "}
          <span className="text-blue-500">Movie</span> with{" "}
          <span className="text-red-500">AI Insights</span>
        </h1>

        
      </div>
      <form
  className="w-full md:w-1/2 bg-black grid grid-cols-1 md:grid-cols-12 rounded-md"
  onSubmit={(e) => e.preventDefault()}
>
  <input
    ref={searchText}
    type="text"
    className="p-4 m-2 md:m-4 rounded-md font-medium col-span-1 md:col-span-9"
    placeholder={lang[langKey].gptSearchPlaceholder}
  />
  <button
    className="m-2 md:m-4 py-2 px-4 bg-red-700 text-white rounded-lg font-semibold flex items-center gap-2 text-lg col-span-1 md:col-span-3  justify-center"
    onClick={handleGptSearchClick}
    disabled={loading}
  >
    <span className="flex items-center gap-2 flex-shrink-0">
      {loading ? (
        <>
          {loadingTextOptions[loadingTextIndex]} 
        </>
      ) : (
        <>
          <FiSearch /> {lang[langKey].search}
        </>
      )}
    </span>
  </button>
</form>

    </div>
  );
};
export default GptSearchBar;
