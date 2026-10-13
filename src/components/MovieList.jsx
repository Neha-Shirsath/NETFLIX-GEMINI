import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    console.log(movies)
    return (
        <div className="py-3  pr-3 text-white">
            <h1 className="py-2 mx-2 text-2xl font-medium pl-4">{title}</h1>
            <div className="flex justify-between overflow-x-scroll scrollbar-hide">
                <div className="flex scrollbar-hide">
                    {movies?.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
                </div>
            </div>
        </div>
    
    )
}

export default MovieList;