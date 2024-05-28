import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants.js'

export default function Give() {
  return (
    <>

            <div className='h-96 flex flex-col items-center justify-center border-2 lg:mb-20' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.7), rgba(255, 165, 0, 0.6)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/IMG_6644.jpg?alt=media&token=aa4845e7-291f-4dbc-b6ac-8cbbeb00d31e')`,
            backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "40%",}}>

            <motion.div
             variants={fadeIn("down", 0.1)}
             initial = "hidden"
             whileInView={"show"}
             viewport={{once:false, amount: 0.9}}

             className='text-center'>
            <p className='lg:text-3xl text-orange-200 '>TENURE THEME:</p>
              <p className='lg:text-5xl font-semibold text-white'>GIVE AND IT SHALL BE GIVEN UNTO YOU</p>
              <small className='text-white font-semibold'>(Gen 12:2)</small>
            </motion.div>
        </div>

    </>
  )
}
