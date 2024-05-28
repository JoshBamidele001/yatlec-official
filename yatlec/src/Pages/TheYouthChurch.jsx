import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants.js'

export default function TheYouthChurch() {
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
              <p className='lg:text-5xl font-semibold text-white'>BUILDING GREAT NATIONS</p>
              <small className='text-white font-semibold'>(Gen 12:2)</small>
            </motion.div>
        </div>

        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-10'>

              <div>

              <div className='h-[250px] w-[250px] lg:h-[600px] lg:w-[600px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
                        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/p.joshua.jpg?alt=media&token=ba80798e-16c1-4576-8690-ddbeb2a91a79')`,
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "45%", backgroundPositionY: "50%"}}>
                      </div> 

              </div>

            <div>
              <p className='lg:text-4xl font-semibold'>JOSHUA BAMIDELE</p>
              <p>NATIONAL YOUTH PRESIDENT</p>
              <small>(2021-2024 tenure)</small>
              <p className='my-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, exercitationem? Molestias laboriosam minus qui voluptatem eaque doloremque inventore eligendi totam itaque, adipisci eius deserunt laudantium voluptas earum fuga in praesentium sapiente cupiditate, facilis, quasi id. Aliquid magni labore non perferendis, sed eveniet quo, repudiandae iusto saepe debitis consectetur, eius fuga excepturi sint. Harum quos molestiae impedit magnam aspernatur quam laboriosam!</p>
              <p className='my-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, exercitationem? Molestias laboriosam minus qui voluptatem eaque doloremque inventore eligendi totam itaque, adipisci eius deserunt laudantium voluptas earum fuga in praesentium sapiente cupiditate, facilis, quasi id. Aliquid magni labore non perferendis, sed eveniet quo, repudiandae iusto saepe debitis consectetur, eius fuga excepturi sint. Harum quos molestiae impedit magnam aspernatur quam laboriosam!</p>
            </div>

        </div>

          {/* Other national executives */}
          <p  className='lg:text-3xl font-semibold text-center text-orange-700 lg:my-10  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' >OTHER NATIONAL EXECUTIVES</p>

<div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-4'>

  <div>
      <div className='h-[200px] w-[200px] lg:h-[300px] lg:w-[200px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/P.%20oLAOLU.jpg?alt=media&token=f05de6ab-44d7-47a2-b721-101e27b075b5')`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
      </div> 
      <p className='lg:text-lg font-semibold lg:my-5 hover:border-b'>OLAOLUWA EMMANUEL</p>

  </div>

  <div>
      <div className='h-[200px] w-[200px] lg:h-[300px] lg:w-[200px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/Youth%20excos%2FSis%20Peace.jpg?alt=media&token=c9ff48b4-cea9-4b76-bf7b-d15012c38ef0')`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "50%",}}>
      </div> 
      <p className='lg:text-lg font-semibold lg:my-5 hover:border-b'>SIS PEACE ILESANMI</p>

  </div>

  <div>
      <div className=' h-[200px] w-[200px] lg:h-[300px] lg:w-[200px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/Youth%20excos%2Fsis%20iyanu.jpg?alt=media&token=e0c97a14-1dc6-4d81-93d5-279a4029355c')`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "50%", backgroundPositionY: "10%"}}>
      </div> 
      <p className='lg:text-lg font-semibold lg:my-5 hover:border-b'>SIS IYANU ADISA</p>

  </div>

  <div>
      <div className='h-[200px] w-[200px] lg:h-[300px] lg:w-[200px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/pas%20pelumi.jpg?alt=media&token=70cadf2b-ccff-416a-84db-56f6b8aa801b')`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
      </div> 
      <p className='lg:text-lg font-semibold lg:my-5 hover:border-b'>PAST PELUMI ADEBAYO</p>

  </div>

  <div>
      <div className=' h-[200px] w-[200px] lg:h-[300px] lg:w-[200px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/Youth%20excos%2FAdura%20gbemi.jpg?alt=media&token=abd08e49-3b9f-4e63-93de-ffaa8d42f08b')`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
      </div> 
      <p className='lg:text-lg font-semibold lg:my-5 hover:border-b'>ADURA OJO</p>

  </div>

  <div>
      <div className=' h-[200px] w-[200px] lg:h-[300px] lg:w-[200px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/Youth%20excos%2FPDAVE.jpg?alt=media&token=610c15e0-69ec-440d-bade-57c5b1f9565f')`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
      </div> 
      <p className='lg:text-lg font-semibold lg:my-5 hover:border-b'>ADISA DAVID</p>

  </div>

  <div>
      <div className=' h-[200px] w-[200px] lg:h-[300px] lg:w-[200px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/Youth%20excos%2Fbro%20leye.jpg?alt=media&token=9039635c-0c18-44bd-bb3d-9759665645e3')`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
      </div> 
      <p className='lg:text-lg font-semibold lg:my-5 hover:border-b'>ADEYEMO LEYE</p>

  </div>

  <div>
      <div className='h-[200px] w-[200px] lg:h-[300px] lg:w-[200px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/Youth%20excos%2Fsis%20Vic.jpg?alt=media&token=d21c91da-4728-499b-918c-a19a1a58ff4c')`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
      </div> 
      <p className='lg:text-lg font-semibold lg:my-5 hover:border-b'>VICTORIA IDERIAPO</p>

  </div>





</div>
<p  className='lg:text-3xl font-semibold text-center text-orange-700 lg:my-10  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' >UPCOMING EVENTS</p>

      <ol className='max-w-5xl mx-auto text-2xl'>
        <li>- NATIONAL SISTERS' CONFERENCE- JUNE 15TH</li>
        <li>- NATIONAL YOUTH CAMP- THUR AUGUST 29TH- SAT 31, 2024</li>
      </ol>


    </>
  )
}
