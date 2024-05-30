import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <section className='border-y-2  mt-10'>
        <div className='bg-white grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-[85%_15%] p-3 font-semibold'>    
            <div className='grid grid-cols-2 sm:grid-cols-2 items-center  leading-8 text-sm'>

                <div className='w-1/2'>
                    this is the official website of YE ARE THE LIGHT EVANGELICAL CHURCH
                </div>

            
        <div className='flex justify-around flex-col md:flex-row'>
            
        <ul className=''>
              <li>OUR PAGES</li>
              <Link to='/about'><li className='text-gray-400 hover:text-gray-600'>About</li></Link>
              <Link to='/our-pastors'><li className='text-gray-400 hover:text-gray-600'>Our Pastors</li></Link>
              <Link to='/our-assemblies'><li className='text-gray-400 hover:text-gray-600'>Our assemblies</li></Link>
              <Link to='/the-youths'><li className='text-gray-400 hover:text-gray-600'>The youths</li></Link>
              <Link to='/give'><li className='text-gray-400 hover:text-gray-600'>Give</li></Link>
              </ul>

             <ul>
              <li>WHO WE ARE?</li>
              <Link to='/about'><li className='text-gray-400 hover:text-gray-600'>Our Vision</li></Link>
              <Link to='/about'><li className='text-gray-400 hover:text-gray-600'>OUr Mission</li></Link>
              <Link to='/about'><li className='text-gray-400 hover:text-gray-600'>Our Motto</li></Link>
             </ul>
        </div>

             </div>

           <div className='flex justify-between items-center my-5'>
           <FaFacebook />
           <AiFillInstagram />
           <FaXTwitter />
           <BsFillThreadsFill />
           <BiLogoGmail />

           </div>
            
        </div>
        <hr />
        <span className='text-center mx-auto my-5'>Copyright (c) 2024</span>
    </section>
  )
}
