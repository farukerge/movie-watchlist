import React, { useState } from 'react'
import { ResultMovieCard } from './ResultMovieCard';
import Trending from './Trending';

let key = "54dfb12e4c2328e7ab57c2792ddea5ef"


export const Add = () => {

    const [query, setQuery] = useState("");  
    const [results, setResults] = useState([])

    
    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value)

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
            setResults(data.results);
        } else {
            setResults([]);
        }
      });
    } 

    

  return (
    <section className=' h-full  flex w-full'>
      <div className='flex flex-col container  mx-auto  mt-24'>
        <div className='flex items-center justify-center w-full'>
          <input
                type="text"
                placeholder='Search Movie'
                className=" mb-5 h-9 w-96 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                onChange={onChange} 
                value={query} 
              /> 
        </div>
            <div className='relative flex flex-col mb-6 '>   
              {results.length > 0 && (
                  <ul className='grid grid-cols-8 gap-4'>
                    {results.map((movie) =>
                    (<li  key={movie.id}>
                        <ResultMovieCard movie={movie} />
                    </li>))}
                  </ul>
             )}
           </div>
       </div>
    </section>
  )
}
