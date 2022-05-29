import { useContext } from "react"
import { globalContext } from "../Hooks/GlobalState"

export const ResultMovieCard = ({ movie }) => {
  
  const { addMovieToWatchlist, watchlist } = useContext(globalContext);

  let storedMovie = watchlist.find( (i) => i.id === movie.id);
  let disableDuplicate = storedMovie ? true : false;

  return (
    
        <div className='relative'>
            {movie.poster_path ? (
                <img className=' block w-44 h-64 ' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            ):(
            <div className='bg-slate-400 w-44 h-64'></div>
            )}
            <div className='absolute  flex  flex-col p-4 justify-center  bottom-0 right-0 left-0  h-full opacity-0 hover:opacity-100 bg-card'>
                <div className='flex flex-col  absolute text-yellow-50  '>
                  <h3 className=" font-bold">{movie.title}</h3>
                  <h4 className=' text-slate-200'>{movie.release_date.substring(0, 4)}</h4>  
                </div>
                <button
                 onClick={ () => addMovieToWatchlist(movie) } 
                 disabled = {disableDuplicate}
                 className='bg-amber-500 items-start mt-4 rounded-lg py-1  p-4 font-semibold mb-4 hover:bg-amber-300 disabled:pointer-events-none disabled:bg-amber-200 absolute bottom-0'
                >
                   Add to watchlist
                </button>
            </div>
        </div>
        
    
  )
}


