import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    
      <div className="sticky top-0 z-10 bg-black border-b-2 p-5 flex items-center justify-between">
        <Link to={'/'}>
        <span className='text-red-500 font-semibold text-3xl '>Filmy<span className='text-white'>Verse</span></span></Link>
        <Link to={'addmovie'}>
        <h1>
         <Button><AddIcon className='secondary'/> <span className='text-white'>Add New</span>
         </Button>
         </h1>
         </Link>
      </div>
    </>
  )
}

export default Header
