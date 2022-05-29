import { useContext } from 'react'
import { globalContext } from '../Hooks/GlobalState'
import WatchlistMovieCard from './WatchlistMovieCard';


export const Watchlist = () => {

  const { watchlist } = useContext(globalContext);

  return (
    <section className=' h-full  flex w-full'>
        <div className='flex container  mx-auto mt-24'>
              {watchlist.length > 0 && (
                  <ul className=' grid grid-cols-8 gap-5  mx-auto '>
                    {watchlist.map((movie) => (
                      <li key={movie.id}>
                        <WatchlistMovieCard movie={movie} type = "watchlist" />
                      </li>
                    ))}
                  </ul>
              )}
       </div>
    </section>
  )
}


