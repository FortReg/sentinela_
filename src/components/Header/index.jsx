import React from 'react'
import logo from '../../assets/logo_fortreg.png'

const Header = () => {
  return (
    <div className='w-full h-16 bg-slate-500'>
      <img 
              src={logo} 
              alt="logo" 
              className= "w-40"
            />
    </div>
  )
}

export default Header
