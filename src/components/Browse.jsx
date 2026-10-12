import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies()

  return (
    <div>
        <Header />

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