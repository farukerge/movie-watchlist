import { AiOutlineEye, AiOutlineClose } from 'react-icons/ai'
import { useContext } from 'react'
import { globalContext } from '../Hooks/GlobalState'

const ControlButtons = ({ movie, type }) => {
    
    const { removeMovieFromWatchlist,addMovieToWatched } = useContext(globalContext);

  return (
    <div className='flex px-2  rounded-lg bg-slate-200 '>
        {type === 'watchlist' && (
            <>
                <button onClick={() => addMovieToWatched(movie)}><AiOutlineEye className=' hover:text-amber-500 text-lg' /></button>
                <button onClick={() => removeMovieFromWatchlist(movie.id)}><AiOutlineClose className='hover:text-amber-500 ml-2' /></button>
            </>
        )}
    </div>
  )
}

export default ControlButtons