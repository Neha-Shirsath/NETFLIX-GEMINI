import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {

    if(!posterPath) return null;
    return (
        <div className="md:w-36 ml-5 w-24 ">
            <img className="" src={ IMG_CDN_URL + posterPath } alt="movie-img" />
        </div>
    )
}

export default MovieCard;