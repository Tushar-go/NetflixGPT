import { BG_BANNER } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div>
    <div className="fixed -z-10">
      <img
        className="h-screen w-screen object-cover"
        src={BG_BANNER}
        alt="logo"
      />
    </div>
    <GptSearchBar />
    <GptMovieSuggestions />
  </div>
  );
};
export default GPTSearch;