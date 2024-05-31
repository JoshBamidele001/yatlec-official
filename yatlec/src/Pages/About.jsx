import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants.js'

export default function About() {
  return (
    <div>

      {/* Our vision */}
       <div className='flex flex-col gap-1'>

      <div className="parallax bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/IMG_6557.jpg?alt=media&token=f6ad1fc2-5a7e-4d20-9c21-d9df18598b31')", backgroundPositionY: "10%" }}>

      <div className='w-screen bg-orange-300 bg-opacity-80 border-3 shadow-xl '>
       <motion.div
       variants={fadeIn("down", 0.1)}
       initial = "hidden"
       whileInView={"show"}
       viewport={{once:false, amount: 0.9}}
        className='max-w-4xl h-[220px] md:h-[330px] lg:h-[300px] mx-auto flex flex-col items-center justify-center content-center'>
            <p className='text-xl lg:text-5xl font-semibold text-orange-700 mt-5 md:mt-0 '>VISION STATEMENT</p>
            
            <p className='my-4 text-sm lg:text-xl mx-5 md:mx-20 lg:mx-0 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatem deleniti nisi nemo adipisci dolor illum earum eveniet deserunt est? Tempore quam distinctio perferendis provident laudantium id quisquam, consequuntur voluptatibus?</p>
        
       </motion.div>
         </div>

         {/* mission Statement */}

         <div className='w-screen bg-slate-200  border-3  shadow  '>
          <motion.div
          variants={fadeIn("left", 0.1)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.9}}
          
          className='max-w-4xl h-[220px] md:h-[365px] lg:h-[300px] mx-auto flex flex-col items-center justify-center content-center'>
                <p className=' text-xl lg:text-5xl font-semibold text-orange-700 mt-5 md:mt-0 '>MISSION STATEMENT</p>
                <p className='my-4 text-sm lg:text-xl mx-5 md:mx-20 lg:mx-0 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatem deleniti nisi nemo adipisci dolor illum earum eveniet deserunt est? Tempore quam distinctio perferendis provident laudantium id quisquam, consequuntur voluptatibus?</p>
            
          </motion.div>
         </div>


          {/* motto of the church  */}
          
         <div className='w-screen bg-orange-300 bg-opacity-80   border-3  shadow  '>
          <motion.div
          // variants={fadeIn("right", 0.1)}
          // initial = "hidden"
          // whileInView={"show"}
          // viewport={{once:false, amount: 0.9}}

           className='max-w-4xl h-[226px] w-screen md:h-[330px] lg:h-[300px] mx-auto  flex flex-col items-center justify-center content-center'>
                <p className='lg:text-5xl font-semibold text-orange-700'>MOTTO</p>
                <p className='my-4 text-sm lg:text-2xl'>"Evangelism is our major business"</p>
            
          </motion.div>
         </div>
      </div>

       </div>

       {/* Our programs and time of events */}

                <p className='text-center p-4 font-semibold lg:text-2xl mt-5 lg:mt-10'>OUR SERVICES</p>
                <hr />
        <div className='max-w-7xl mx-auto grid lg:grid-cols-3 lg:my-10 gap-10 '> 
          {/* one program display */}
          <div className='border-2 text-wrap text-justify mx-4 md:mx-20 lg:mx-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
            <img className='w-full' 
             src="../src/resources/asset 22.jpeg" alt="" />
            <p className='font-semibold lg:text-2xl my-6 mx-2 text-center  '>SUNDAYS SERVICE</p>
            <p className='mx-4 md:text-2xl lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam id amet est ullam incidunt inventore saepe tempore. Aliquam assumenda aspernatur ipsum amet accusantium voluptas eaque esse nisi iusto omnis.</p>
          </div>

          <div className='border-2 text-wrap text-justify  mx-4 md:mx-20 lg:mx-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
            <img className='w-full' 
             src="../src/resources/asset 33.jpeg" alt="" />
            <p className='font-semibold lg:text-2xl my-6 mx-2 text-center '>BIBLE STUDY</p>
            <p className='mx-4 md:text-2xl lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam id amet est ullam incidunt inventore saepe tempore. Aliquam assumenda aspernatur ipsum amet accusantium voluptas eaque esse nisi iusto omnis.</p>
          </div>

          <div className='border-2 text-wrap text-justify  mx-4 md:mx-20 lg:mx-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' >
            <img className='w-full' 
             src="../src/resources/asset 40.jpeg" alt="" />
            <p className='font-semibold lg:text-2xl my-6 mx-2 text-center'>PRAYER MEETING</p>
            <p className='mx-4 md:text-2xl lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam id amet est ullam incidunt inventore saepe tempore. Aliquam assumenda aspernatur ipsum amet accusantium voluptas eaque esse nisi iusto omnis.</p>
          </div>

        </div>

      
    </div>
  )
}
