import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return (
        <div className="w-36 ml-5">
            <img className="w-full" src={ IMG_CDN_URL + posterPath } alt="movie-img" />
        </div>
    )
}

export default MovieCard;