import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {

    if(!posterPath) return null;
    return (
        <div className="w-36 pl-5 ">
            <div className="hover:shadow-2xl hover:scale-125">
            <img className="w-full " src={ IMG_CDN_URL + posterPath } alt="movie-img" />
            </div>
        </div>
    )
}

export default MovieCard;