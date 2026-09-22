import React, { useState } from 'react'



const style = {
  link: 'hover:bg-white hover:text-slate-800 py-2 px-1 rounded-md transition-colors duration-700 text-2xl'
}

function Navbar() {
  const [IsOpen, setIsOpen]= useState(false);

  const toggleMenu = ()=>{
    setIsOpen(!IsOpen);
  }
  return (
    <>
      {/* navbar of small screen */}
      <nav className='bg-slate-800 p-3 text-white fixed top-0 w-full z-10 ' >
        <div className='flex justify-between items-center mx-auto container'>
          <h1 className='text-4xl'>Wiah-D</h1>
          {/* navbar on big screen sizes */}
          <ul className='md:flex space-x-6 hidden'>
            <li className={style.link}><a href="#">Home</a></li>
            <li className={style.link}><a href="#about">About</a></li>
            <li className={style.link}><a href="#">Project</a></li>
            <li className={style.link}><a href="#">Contact</a></li>
          </ul>
<div className='cursor-pointer md:hidden'>
  {IsOpen ? (<i className="fa-solid fa-xmark  " onClick={toggleMenu}></i>) : ( <i className="fa-solid fa-bars" onClick={toggleMenu}></i> )}

</div>
        </div>
        {/* navbar of small screen */}
        {IsOpen && (
          <ul className='flex space-y-6 flex-col mt-4 text-center md:hidden'>
          <li className={style.link}><a href="#">Home</a></li>
          <li className={style.link}><a href="#about">About</a></li>
          <li className={style.link}><a href="#">Project</a></li>
          <li className={style.link}><a href="#">Contact</a></li>
        </ul>
        )}
      </nav>
    </>
  )
}

export default Navbar;