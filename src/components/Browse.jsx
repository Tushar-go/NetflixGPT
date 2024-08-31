import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useHorrorMovies from '../hooks/useHorrorMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'





export default function Browse() {
  useNowPlayingMovies()
  usePopularMovies();
  useUpcomingMovies()

 useHorrorMovies()
  
 const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      </div>
  )
}
