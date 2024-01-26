import React, { useContext, useEffect, useState } from 'react'
import { Link, useActionData } from 'react-router-dom';

import { AuthContext } from '../contects/AuthProvider.jsx'

//react icons 
import { FaBlog, FaBarsStaggered, FaXmark } from 'react-icons/fa6'


const Navbar = () => {

  const [menuToggle, setMenuToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);


  const toggle = () => {
    setMenuToggle(!menuToggle);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {

      window.addEventListener("scroll", handleScroll);
    }
  }, [])

  const navItem = [

    { link: "Home", path: "/" },
    { link: "Sale your book", path: "/admin/dashbord" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Blog", path: "/blog" },
  ]

  return (
    <header className='w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300' : ''} `} >
        <div className='flex justify-between item-center text-base gap-8' >

          <Link to='/' className='text-2xl font-bold text-blue-700 flex item-center gap-2' >
            <FaBlog className='inline-block' /> Books
          </Link>

          <ul className='md:flex space-x-12 hidden'>

            {navItem.map((navInfo) => {
              const { path, link } = navInfo;
              return (
                <Link
                  key={path}
                  to={path}
                  className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  ' >
                  {link}
                </Link>
              )
            })}
          </ul>
          <div className='space-x-12 hidden lg:flex item-center'>
            <button > <FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
          </div>

          <div className='md:hidden' >
            <button onClick={toggle} className='text-black focus:outline-none' >
              {
                menuToggle ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
              }
            </button>
          </div>
        </div>

        <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${menuToggle ? "block fixed top-0 right-0 left-0" : "hidden"}`} >

          {navItem.map((navInfo) => {
            const { path, link } = navInfo;
            return (
              <Link
                key={path}
                to={path}
                className='block text-base text-white uppercase cursor-pointer' >
                {link}
              </Link>
            )
          })}

        </div>

      </nav>
    </header>
  )
}

export default Navbar
