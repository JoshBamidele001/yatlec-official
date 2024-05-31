import React from 'react'
import  ShapeDivider from '../MyComponents/ShapeDivider'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants.js'
import { Link } from 'react-router-dom'
import { GoStarFill } from "react-icons/go";




export default function Header() {
  return (
    <>

    <div className="relative h-[580px]  lg:h-screen  md:h-[700px] shadow-2xl  flex flex-col justify-center items-center bg-fixed parallax bg-center bg-gray-100">
      <div className="absolute top-0 left-0 w-full h-[580px] md:h-[700px] shadow-2xl lg:h-screen border-b-4 md:border-b  bg-cover bg-center hover:shadow-2xl " style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.7), rgba(255, 165, 0, 0.6)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/IMG_8259.jpg?alt=media&token=95308410-64fc-4137-a6fe-d46e4eb7d921')`,
      
      backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%", loading: "lazy"}}>
        <ShapeDivider />
        
      </div>
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.9}} 

      className="relative z-1 md:top-0 text-center p-4 lg:mt-10">
        <h1 className=" md:text-2xl text-sm md:font-semibold text-white">Welcome to the official website of</h1>
        <p className="text-3xl md:text-3xl lg:text-6xl text-white md:mt-2  font-bold">YE ARE THE LIGHT EVANGELICAL CHURCH</p>
      </motion.div>

      <motion.div
      variants={fadeIn("up", 0.3)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.9}}
      className="relative z-1 text-center p-4" >
        <p className=' text-wrap text-justify mt-20 hidden  md:mt-0 md:w-4/5 mx-auto text-white font-bold md:font-semibold text-sm md:text-lg'>Welcome to Ye Are the Light Evangelical Church! We are a vibrant community grounded in the Word of God, fervent in prayer, and passionate about evangelism. Our mission is to shine the light of Christ in our lives and the world around us. Join us as we grow in faith, support one another, and spread the good news of Jesus Christ. Together, we can make a difference through the power of God's love and grace. Join us for dynamic worship services, enriching Bible studies, and meaningful fellowship. At Ye Are the Light Evangelical Church, you'll find a supportive family ready to grow in faith together and make a transformative impact. Come and be a part of our mission to illuminate the world with God's love and grace.</p>
      </motion.div>

        

      <motion.p
      variants={fadeIn("up", 0.3)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.9}} 
       className='mx-10 text-sm font-normal text-white z-10 text-center md:text-3xl md:mb-20'>...a PLACE of <span className='font-semibold text-lg md:text-3xl lg:text-4xl'> SPIRITUAL </span> and <span className='font-semibold text-lg md:text-2xl lg:text-4xl'> PHYSICAL </span> GROWTH 
        </motion.p>

        <p className='flex gap-3 text-sm text-white z-10 my-2'><GoStarFill /> <GoStarFill /> <GoStarFill /> <GoStarFill /> <GoStarFill /></p>

      <motion.div
      variants={fadeIn("left", 0.4)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.9}} className='z-10 flex flex-col md:flex-row gap-1 md:gap-6 items-center text-white font-semibold mt-5'>
        <Link to='/about'>
        <button className='btn bg-orange-800 border-2 p-1 px-3 text-center md:p-3 lg:p-3 text-sm md:text-base rounded-xl hover:bg-black hover:border-b-2' >ABOUT US</button>
        </Link>
          <Link to='/our-assemblies'>
          
        <button className='btn bg-orange-800 border-2 p-1 px-3 md:p-3 lg:p-3 text-sm md:text-base  rounded-xl hover:bg-black hover:border-b-2' >OUR BRANCHES</button>
          </Link>

          <Link to='/the-youths'>
        <button className='btn bg-orange-800 border-2 p-1 px-3 md:p-3 lg:p-3 text-sm md:text-base  rounded-xl hover:bg-black hover:border-b-2' >THE YOUTHS</button>
          </Link>
      </motion.div>

     
      
    </div>



    </>
  )
}
