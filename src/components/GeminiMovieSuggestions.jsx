import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestions = () => {

    const gemini = useSelector((store) => store.gemini);
    const { movieResults, movieNames } = gemini;

    if(!movieNames) return null;

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-85">
            <div>
                {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
            </div>
        </div>
    )
}

export default GeminiMovieSuggestions;