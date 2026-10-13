import GeminiMovieSuggestions from "./GeminiMovieSuggestions";
import GeminiSearchBar from "./GeminiSearchBar";
import { MOVIES_BG } from "../utils/constants";

const GeminiSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                      <img 
                      src={MOVIES_BG}
                      alt="movies-bg" />
                    </div>
            <GeminiSearchBar />
            <GeminiMovieSuggestions />
        </div>
    )
}

export default GeminiSearch;