import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants.js'

export default function Section1() {
  return (
    <div className='bg-red-600 w-screen'>
             <div className="relative overflow-hidden">
      {/* Parallax Section */}
      <div className="parallax bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/ya002.jpg?alt=media&token=ae9f2788-aa3d-456f-8709-fd9b5d306d7ehttps://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/IMG_8259.jpg?alt=media&token=95308410-64fc-4137-a6fe-d46e4eb7d921')" }}>
        <div className="flex items-center justify-between h-full bg-black bg-opacity-50">
          {/* <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1> */}
          
          <div className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-10 p-4 '>
          <div className='border-4 p-3 md:h-[550px] text-center bg-gray-300 bg-opacity-75 text-black px-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
           <h2 className='text-5xl font-bold m-2 '>THE WORD</h2>
            <p className='my-10 text-lg font-semibold'>We preach the word; we teach the word, we live the word</p>
            <p className='text-wrap my-10 text-justify text-orange-800 font-semibold mx-3'>At Ye Are the Light Evangelical Church, we are committed to the Word of God in every aspect of our lives. We preach the Bible with passion, teach its truths with clarity, and live out its principles daily. Join us as we grow in faith and share God's love, making His Word the foundation of everything we do.</p>
            <p className='btn bg-orange-600 text-white p-4 rounded-lg my-4'>Contact Us</p>
          </div>

          <div className='border-4 p-3 md:h-[550px] text-center bg-gray-300 bg-opacity-75 text-black px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
           <h2 className='text-5xl font-bold m-2 '>PRAYERS</h2>
            <p className='my-10 text-lg font-semibold'>We live by Prayers; Prayers is our lifestyle</p>
            <p className='text-wrap my-10 text-justify text-orange-800 font-semibold mx-3'>At Ye Are the Light Evangelical Church, prayer is powerful and transformative. We pray to God with faith, and we witness instant answers, miracles, and deliverances. Join us in prayer and experience the incredible impact of God's presence and power in your life, bringing healing, hope, and breakthrough in every situation.</p>
            <p className='btn bg-orange-600 text-white p-4 rounded-lg my-4'>Contact Us</p>
          </div>

          <div className='border-4 p-3 md:h-[550px] text-center bg-gray-300 bg-opacity-75 text-black px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
           <h2 className='text-5xl font-bold m-2 '>EVANGELISM</h2>
            <p className='my-10 text-lg font-semibold'>We are passionate about Soul Winning</p>
            <p className='text-wrap my-10 text-justify text-orange-800 font-semibold mx-3'>At Ye Are the Light Evangelical Church, evangelism is at the heart of our mission. We are passionate about winning souls for Christ, sharing the good news with love and urgency. Join us as we reach out to our community and beyond, bringing hope, salvation, and the light of Jesus to those in need. Together, we can transform lives.</p>
            <p className='btn bg-orange-600 text-white p-4 rounded-lg my-4'>Contact Us</p>
          </div>

          </div>

        </div>
      </div>

      {/* Regular Section */}
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <div className=' grid grid-cols-2 mx-10 gap-10'>
          
          {/* the 3 images of the General Overseer */}
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.9}}

           className='flex items-center justify-between gap-3'>
           <div className='lg:h-[650px] w-80 rounded-3xl' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/daddy%20go.jpg?alt=media&token=afa46454-f259-4666-ab12-7280155f8f2b')`,
              backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
            </div>  

            <div className='lg:h-[650px] w-80 rounded-3xl' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/g.o2.jpg?alt=media&token=648dd63d-46e7-4ffd-9c72-e1a241efe72f')`,
              backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "50%",}}>
            </div>  

            <div className='lg:h-[650px] w-80 rounded-3xl' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/g.o3.jpg?alt=media&token=03751b28-dbd1-41dd-8164-b90c6e8fabe1')`,
              backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "50%",}}>
            </div>  

            </motion.div>

          {/* the short note about the church */}
          <motion.div
           variants={fadeIn("down", 0.1)}
           initial = "hidden"
           whileInView={"show"}
           viewport={{once:false, amount: 0.9}}

          className='text-center w-[700px]'>
            <p className='text-3xl font-semibold  '>BORN OUT OF BURDEN FOR SOULS</p>
            <p className='text-justify lg:my-7 font-semibold'>Ye Are the Light Evangelical Church was born out of a profound burden for the souls of men. Our father felt a deep, compelling call to reach out to those who are lost, hurting, and in need of the saving grace of Jesus Christ. This burden drives our mission and fuels our passion for spreading the gospel, ensuring that every individual has the opportunity to hear and respond to the good news.</p>
            <p className='text-justify lg:my-7 font-semibold'>Our commitment to evangelism is rooted in the belief that every soul matters to God. We are dedicated to sharing the message of salvation through various outreach programs, community events, and personal witness. We believe in meeting people where they are, offering hope, love, and the life-changing power of the gospel. Through our efforts, we aim to bring light to dark places and offer a path to redemption for all who seek it.</p>
            <p className='text-justify lg:my-7 font-semibold'>At Ye Are the Light Evangelical Church, we are not just focused on numbers but on genuine transformation. We strive to disciple those who come to faith, helping them grow in their relationship with Christ and equipping them to share their faith with others. Our church is a community where the burden for souls translates into action, making a tangible difference in the lives of individuals and the broader community. Together, we are committed to fulfilling the Great Commission and seeing lives changed by the power of God's love</p>
          </motion.div>
        </div>
      </div>

      {/* Another Parallax Section */}
      <div className="parallax bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/landing.jpg?alt=media&token=d595e1d2-ce69-4f8d-a3e3-3e967d8c76ca')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h2 className="text-white text-3xl font-semibold max-w-3xl text-justify">Ye Are the Light Evangelical Church was founded to reach lost souls with the transformative message of Christ, driven by a deep burden for evangelism and genuine life change.</h2>
        </div>
      </div>

      {/* Final Regular Section */}
      <div className="h-screen flex items-start justify-center bg-gray-300">
       
         {/* mailing box */}
        <div>
          <div className='bg-red-600 w-[1000px] h-[450px] mt-20 rounded-3xl'>
            <p className='text-3xl text-center text-white font-semibold py-10'>JOIN OUR MAILING LIST</p>
            <form action="" className='w-9/12 mx-auto'>
                 <input type="text" className='w-full py-2 px-2 rounded-2xl my-4' placeholder='Your Name'/>
                 <input type="text" className='w-full py-2 px-2 rounded-2xl my-4' placeholder='Your Email account'/>
                 <input type="text" className='w-full py-2 px-2 rounded-2xl my-4' placeholder='Your Location'/>
                 <button className='w-full btn bg-white text-red-700 py-2 px-2 rounded-2xl my-4 border-2 hover:bg-black hover:text-white' type='buttton'>SUBMIT</button>
            </form>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
