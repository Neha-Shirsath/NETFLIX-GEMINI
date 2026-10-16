import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";
import { useRef } from "react";
import gemini from "../utils/Gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMoviesResult } from "../utils/GeminiSlice";

const GeminiSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang)

    const searchText = useRef(null);

    const dispatch = useDispatch();

    //search movie in tmdb db
    const searchMovie = async(movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        return json.results;
    }


    const handleGeminiSearchClick = async () => {
        console.log(searchText.current.value);
        //get movie results from user query

        const geminiQuery = "Act as a Movie Reccommendation sysytem and suggest some Movies for the query : "
                                 + searchText.current.value 
                                 + ". Only give me names of 5 top rated movies, comma separated like the example result given ahead. Example result : Happy New Year, Don, Bahubali, Dhurandhar, KGF";

        const geminiResults = await gemini.models.generateContent({
                    model: "gemini-3.5-flash-lite",
                    contents: geminiQuery,
                });

                if(!geminiResults.text){
                    //ERROR
                }

        console.log(geminiResults.text);

        const geminiMovies = geminiResults.text.split(",");

        const promiseArray = geminiMovies.map((movie) => searchMovie(movie));

        const tmdbResults = await Promise.all(promiseArray);

        console.log(tmdbResults);
        dispatch(addGeminiMoviesResult({movieNames: geminiMovies, movieResults: tmdbResults}));

        };


    return (
        <div className="pt-[40%] md:pt-[10%] flex justify-center">
            <form className="w-full md:w-1/2 m-4 md:m-0 bg-black grid grid-cols-12 rounded-md" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText}
                className="p-2 m-3 col-span-9" type="text" 
                placeholder={lang[langKey].geminiSearchPlaceholder}/>

                <button 
                    onClick={handleGeminiSearchClick}
                    className="px-2 bg-red-700 p-1 m-3 font-bold text-white rounded-md col-span-3 hover:opacity-80">
                    {lang[langKey].Search}
                </button>

            </form>
        </div>
    )
}

export default GeminiSearchBar;