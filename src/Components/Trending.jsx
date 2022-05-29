import React, { useState } from 'react'
import { ResultMovieCard } from './ResultMovieCard';

let key = "54dfb12e4c2328e7ab57c2792ddea5ef"


const Trending = () => {
    const [results, setResults] = useState([])

    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
            setResults(data.results);
        } else {
            setResults([]);
        }
      });



  return (
      <div className='container mx-auto  '>
          <h1 className='text-2xl font-bold py-4 mb-2 '>Trending Movies</h1>
         {results.length > 0 && (
                  <ul className='grid grid-cols-8 gap-4 '>
                    {results.map((movie) =>
                    (<li  key={movie.id}>
                        <ResultMovieCard  movie={movie}/>
                    </li>))}
                  </ul>
             )}
    </div>
  )
}

export default Trending