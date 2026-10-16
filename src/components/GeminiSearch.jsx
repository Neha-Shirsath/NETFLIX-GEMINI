import GeminiMovieSuggestions from "./GeminiMovieSuggestions";
import GeminiSearchBar from "./GeminiSearchBar";
import { MOVIES_BG } from "../utils/constants";

const GeminiSearch = () => {
    return (
        <div>

            <div className="fixed md:fixed -z-10">
                      <img 
                      className="h-screen object-cover md:w-screen"
                      src={MOVIES_BG}
                      alt="movies-bg" />
                    </div>
            <div className="">
                <GeminiSearchBar />
                <GeminiMovieSuggestions />
            </div>
        </div>
    )
}

export default GeminiSearch;