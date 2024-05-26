import React from 'react'
import { Link } from 'react-router-dom'
import yatleclogo from '../resources/yatlec.jpeg'

export default function Navbar() {
  return (
    <>
        <div className='flex items-center justify-around py-3 h-24 bg-white sticky top-0 z-20  w-full'>
            <section className='flex items-center gap-2'>
                    <img src={yatleclogo} alt="" className='w-10' />
                    <span className='font-semibold text-2xl text-orange-700'>Yatlec</span>
            </section>
            <ul className='lg:flex lg:flex-row gap-10 font-semibold text-orange-800 hidden '>
                <Link to='/'>
                <li className='hover:text-orange-700 hover:border-b-2'>Home</li>
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
            <section>
                <span className='btn bg-transparent border-2 p-3 font-semibold rounded-3xl text-orange-800'>Contact us</span>
            </section>
        </div>
    </>
  )
}
