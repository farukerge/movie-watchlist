import React from 'react'
import { useContext } from 'react'
import { globalContext } from '../Hooks/GlobalState'
import WatchlistMovieCard from './WatchlistMovieCard'

export const Watched = () => {
  const { watched } = useContext(globalContext);

  return (
     <section className=' h-full  flex w-full'>
        <div className='flex container  mx-auto mt-24'>
              {watched.length > 0 && (
                  <ul className=' grid grid-cols-8 gap-5  mx-auto '>
                    {watched.map((movie) => (
                      <li key={movie.id}>
                        <WatchlistMovieCard movie={movie} type = "watched " />
                      </li>
                    ))}
                  </ul>
              )}
       </div>
    </section>
  )
}
