import React from 'react'

export default function Contact() {
  return (
    <div>
          <div className='max-w-5xl mx-3 md:mx-10 lg:mx-auto text-center mt-2 md:mt-2 lg:mt-5 text-orange-900'>

          <p className='text-lg md:text-2xl lg:text-3xl font-semibold'>LETS FEED YOUR SPIRIT WITH EDIFYING CONTENTS AND MESSAGES THAT WILL HELP YOUR SPIRITUAL WELL-BEING</p>
          </div>

    <div className='bg-red-600 lg:w-[1000px] md:h-[450px] mx-3 md:px-6 mt-20 rounded-3xl p-2 max-w-7xl lg:mx-auto'>
          <p className='md:text-3xl text-center text-white font-semibold md:py-10'>JOIN OUR MAILING LIST</p>

          {/* mailing form */}
          <form action="" className='w-9/12 mx-auto text-sm md:text-base '>
               <input type="text" className='w-full py-2 px-2 rounded-2xl md:my-4 my-2' placeholder='Your Name'/>
               <input type="text" className='w-full py-2 px-2 rounded-2xl md:my-4 my-2' placeholder='Your Email account'/>
               <input type="text" className='w-full py-2 px-2 rounded-2xl md:my-4 my-2' placeholder='Your Location'/>
               <button className='w-full btn bg-white text-red-700 py-2 px-2 rounded-2xl md:my-4 border-2 hover:bg-black hover:text-white my-2' type='buttton'>SUBMIT</button>
          </form>

         
        </div>

    </div>
  )
}
