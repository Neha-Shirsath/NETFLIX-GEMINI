import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GeminiSearch from "./GeminiSearch";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
        <Header />
        <GeminiSearch />
        <MainContainer />
        <SecondaryContainer />
        {/* {
        main container
         -videoBG
         -videoTitle
        secondry container
         -moviesList
          -n cards
        } */}
    </div>
  )
}

export default Browse;