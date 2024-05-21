import React from 'react'

export default function Section1() {
  return (
    <div className='bg-red-600 w-screen'>
             <div className="relative overflow-hidden">
      {/* Parallax Section */}
      <div className="parallax bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/ya002.jpg?alt=media&token=ae9f2788-aa3d-456f-8709-fd9b5d306d7ehttps://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/IMG_8259.jpg?alt=media&token=95308410-64fc-4137-a6fe-d46e4eb7d921')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
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
