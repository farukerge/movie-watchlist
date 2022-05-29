import React from 'react'
import ControlButtons from './ControlButtons'

const WatchlistMovieCard = ({ movie,type }) => {
  return (
    <div className='relative'>
        {movie.poster_path ? (
            <img className='block w-44 h-64 ' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
        ):(
            <h1 className=' '>Your watchlist is empty</h1>
        )}
        <div className='absolute  flex  flex-col p-4 justify-center  text-left  bottom-0 right-0 left-0  h-full opacity-0 hover:opacity-100 bg-card '>
            <div className='flex flex-col  absolute text-yellow-50  '>
                <h3 className=' font-bold'>{movie.title}</h3>
                <h4 className=' '>{movie.release_date.substring(0, 4)}</h4>
            </div>
            <div className='absolute bottom-0 mb-6 flex items-center justify-center w-fultext-white ml-10'>
                 <ControlButtons type={type} movie={movie} />
            </div>
        </div>
    </div>
  )
}

export default WatchlistMovieCard