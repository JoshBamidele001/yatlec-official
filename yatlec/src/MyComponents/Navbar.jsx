import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { TfiAlignJustify } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
import yatleclogo from '../resources/yatlec.jpeg'
import '@fontsource/satisfy';

export default function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false)

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
   
  }

  const handleMenuClick = () => {
    setisMenuOpen(false);
  }

  return (
    <>
        <div className='flex items-center justify-around lg:justify-around py-3 h-24 bg-white sticky top-0 z-20 text-nowrap md:mx-2 lg:mx-0   w-full'>
           <Link to='/'>
            <section className='flex items-center gap-2 md:me-3 lg:me-0'>
                    <img src={yatleclogo} alt="" className=' w-6 md:w-10' />
                    <span className='font-satisfy md:font-normal font-semibold md:text-2xl text-orange-800'>Yatlec</span>
            </section>
           </Link>


            <ul className='lg:flex lg:flex-row md:gap-3 lg:gap-10 font-semibold text-orange-800 hidden md:flex md:text-sm lg:text-base'>
                <Link to='/'>
                <li className='hover:text-orange-700 hover:border-b-2 '>Home</li>
                </Link>
                <Link to='/about'>
                <li className='hover:text-orange-700 hover:border-b-2'>Who we are</li>
                </Link>
                <Link to='/our-pastors'>
                <li className='hover:text-orange-700 hover:border-b-2'>Our Pastors</li>
                </Link>
                <Link to='/our-assemblies'>
                <li className='hover:text-orange-700 hover:border-b-2'>Our Assemblies</li>
                </Link>
                <Link to='/gallery'>
                <li className='hover:text-orange-700 hover:border-b-2'>Gallery</li>
                </Link>
                <Link to='/the-youths'>
                <li className='hover:text-orange-700 hover:border-b-2'>The Youth Church</li>
                </Link>
                <Link to='/give'>
                <li className='hover:text-orange-700 hover:border-b-2'>Give</li>
                </Link>
            </ul>

            <Link to='/contact'>
            <section className='hidden lg:inline-block'>
                <span className='btn bg-transparent border-2 p-3 font-semibold rounded-3xl text-orange-800'>Contact us</span>
            </section>
            </Link>

            <div className='flex items-center gap-'>

            <div className='block ms-10 text-2xl text-orange-800 md:hidden lg:hidden' onClick={toggleMenu}>
                 <TfiAlignJustify/>
            </div>


            <Link to='/contact'>
            
            <div className='block ms-10  text-2xl text-orange-800 md:hidden lg:hidden'>
            <TiMessages />
            </div>
            </Link>

            </div>

            { isMenuOpen ? (
              
               <ul className='flex flex-col md:hidden text-orange-800 font-semibold justify-between bg-white p-8 leading-8 absolute top-20 w-full '>
                <Link to='/' onClick={handleMenuClick}>
                <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Home</li>
                </Link>
                <Link to='/about' onClick={handleMenuClick} >
                <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Who we are</li>
                </Link>
                <Link to='/our-pastors' onClick={handleMenuClick} >
                <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Our Pastors</li>
                </Link>
                <Link to='/our-assemblies' onClick={handleMenuClick}>
                <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Our Assemblies</li>
                </Link>
                <Link to='/gallery' onClick={handleMenuClick}>
                <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Gallery</li>
                </Link>
                <Link to='/the-youths' onClick={handleMenuClick}>
                <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>The Youth Church</li>
                </Link>
                <Link to='/give' onClick={handleMenuClick}>
                <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Give</li>
                </Link>
            </ul>
          
        ) : null

        }


        </div>
    </>
  )
}
