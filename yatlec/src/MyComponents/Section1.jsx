import React from 'react'

export default function Section1() {
  return (
    <div className='bg-red-600 w-screen'>
             <div className="relative overflow-hidden">
      {/* Parallax Section */}
      <div className="parallax bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/ya002.jpg?alt=media&token=ae9f2788-aa3d-456f-8709-fd9b5d306d7ehttps://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/IMG_8259.jpg?alt=media&token=95308410-64fc-4137-a6fe-d46e4eb7d921')" }}>
        <div className="flex items-center justify-between h-full bg-black bg-opacity-50">
          {/* <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1> */}
          
          <div className='grid grid-cols-3 max-w-7xl mx-auto gap-10 p-4 '>
          <div className='border-4 p-3 h-[550px] text-center bg-gray-300 bg-opacity-75 text-black px-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
           <h2 className='text-5xl font-bold m-2 '>THE WORD</h2>
            <p className='my-10 text-lg font-semibold'>We preach the word; we teach the word, we live the word</p>
            <p className='text-wrap my-10 text-justify text-orange-800 font-semibold mx-3'>At Ye Are the Light Evangelical Church, we are committed to the Word of God in every aspect of our lives. We preach the Bible with passion, teach its truths with clarity, and live out its principles daily. Join us as we grow in faith and share God's love, making His Word the foundation of everything we do.</p>
            <p className='btn bg-orange-600 text-white p-4 rounded-lg my-4'>Contact Us</p>
          </div>

          <div className='border-4 p-3 h-[550px] text-center bg-gray-300 bg-opacity-75 text-black px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
           <h2 className='text-5xl font-bold m-2 '>PRAYERS</h2>
            <p className='my-10 text-lg font-semibold'>We live by Prayers; Prayers is our lifestyle</p>
            <p className='text-wrap my-10 text-justify text-orange-800 font-semibold mx-3'>At Ye Are the Light Evangelical Church, prayer is powerful and transformative. We pray to God with faith, and we witness instant answers, miracles, and deliverances. Join us in prayer and experience the incredible impact of God's presence and power in your life, bringing healing, hope, and breakthrough in every situation.</p>
            <p className='btn bg-orange-600 text-white p-4 rounded-lg my-4'>Contact Us</p>
          </div>

          <div className='border-4 p-3 h-[550px] text-center bg-gray-300 bg-opacity-75 text-black px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
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
        <p className="text-gray-900 text-lg">Scroll down to see the parallax effect in action!</p>
      </div>

      {/* Another Parallax Section */}
      <div className="parallax bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/landing.jpg?alt=media&token=d595e1d2-ce69-4f8d-a3e3-3e967d8c76ca')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h2 className="text-white text-3xl font-bold">Another Section</h2>
        </div>
      </div>

      {/* Final Regular Section */}
      <div className="h-screen flex items-center justify-center bg-gray-300">
        <p className="text-gray-900 text-lg">This is the end of the parallax sections.</p>
      </div>
    </div>
    </div>
  )
}
