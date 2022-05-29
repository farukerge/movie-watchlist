import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className=' w-full bg-amber-500 py-5 items-center  '>
        <div className='container mx-auto flex justify-between items-center'>
            <Link className='font-bold text-2xl' to="/">Moxie</Link>
          <div className='text-base font-semibold'>
            <Link className='mr-4' to="/trending">Trends</Link>
            <Link className='mr-4' to="/watchlist">Watchlist</Link>
            <Link  to="/watched">Watched</Link>
          </div>
        </div>
    </header>
  )
}
