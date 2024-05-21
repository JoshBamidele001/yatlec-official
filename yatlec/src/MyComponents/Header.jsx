import React from 'react'
import  ShapeDivider from '../MyComponents/ShapeDivider'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants.js'



export default function Header() {
  return (
    <>
        {/* <div>

          <div>

          </div>

        </div>
        <section className=' h-[300px] md:h-96 lg:h-[600px]  w-full relative ' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.7)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/landing.jpg?alt=media&token=d595e1d2-ce69-4f8d-a3e3-3e967d8c76ca')`,
       backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "60%"}}>

        </section> */}

    <div className="relative h-screen flex flex-col justify-center items-center bg-fixed parallax bg-center bg-gray-100">
      <div className="absolute top-0 left-0 w-full h-screen bg-cover bg-center" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.7), rgba(255, 165, 0, 0.6)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/IMG_8259.jpg?alt=media&token=95308410-64fc-4137-a6fe-d46e4eb7d921')`,
      
      backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "40%",}}>
        <ShapeDivider />
      </div>
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.9}} 

      className="relative z-1 text-center p-4 lg:mt-10">
        <h1 className="text-2xl font-semibold text-white">Welcome to the official website of</h1>
        <p className="text-4xl text-white mt-2  font-bold">YE ARE THE LIGHT EVANGELICAL CHURCH</p>
      </motion.div>

      <motion.div
      variants={fadeIn("up", 0.6)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.9}}
      className="relative z-1 text-center p-4" >
        <p className='text-wrap text-justify w-3/5 mx-auto text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus odit nulla, sit quo nisi fuga nobis, est atque culpa laboriosam eaque, quasi dolores ducimus voluptatem omnis voluptas tempora repellat odio fugit officia! Delectus et cumque saepe voluptates animi dignissimos, dicta architecto aspernatur molestias laboriosam tempore quasi sunt numquam a dolor nam quas. Officiis ipsa maxime blanditiis corrupti asperiores. Cum expedita consectetur aliquam obcaecati nemo amet consequuntur blanditiis soluta! Doloribus molestias eum perferendis! Ipsa dignissimos animi necessitatibus omnis fuga debitis fugit hic odio ad sint? Perferendis aliquid in, illo doloremque ut animi nihil placeat quisquam soluta hic culpa debitis! Omnis, et.</p>
      </motion.div>

      <motion.div
      variants={fadeIn("left", 0.7)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.9}} className='z-10 flex gap-6 text-white font-semibold mt-5'>
        <button className='btn bg-orange-800 border-2 p-3 rounded-xl hover:bg-black hover:border-b-2' >ABOUT US</button>
        <button className='btn bg-orange-800 border-2 p-3 rounded-xl hover:bg-black hover:border-b-2' >OUR BRANCHES</button>
        <button className='btn bg-orange-800 border-2 p-3 rounded-xl hover:bg-black hover:border-b-2' >THE YOUTHS</button>
      </motion.div>
      
    </div>



    </>
  )
}
