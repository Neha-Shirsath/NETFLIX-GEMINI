import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        <div className="py-3 pr-1 md:pr-3 text-white">
            <h1 className="py-2 mx-1 md:mx-2 text-lg md:text-2xl font-medium pl-4">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex flex-nowrap">
                    {movies?.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
                </div>
            </div>
        </div>
    
    )
}

export default MovieList;