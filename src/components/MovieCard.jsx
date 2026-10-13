import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return (
        <div className="w-36 pl-5 relative overflow-visible">
            <div className="transition-all duration-300 hover:scale-110 hover:z-20 hover:shadow-2xl">
            <img className="w-full " src={ IMG_CDN_URL + posterPath } alt="movie-img" />
            </div>
        </div>
    )
}

export default MovieCard;