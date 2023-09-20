import React from 'react'
import photocopy from '../../assets/photocopy.avif'
import A4sizePhoto from '../../assets/a4passport.webp'
import diffSize from '../../assets/differentSize.webp'

const PhotoCopy = () => {
  return (
    <>
      <div className='h-fit pt-5 flex gap-5 flex-col-reverse  items-center justify-center w-[90%] mx-auto'>
        <div className='font-semibold'>
          Welcome to our shop, where your document reproduction needs are met with speed and precision. Our top-of-the-line photocopy machine guarantees crisp, high-quality copies every time.

          Whether you require single-page copies or extensive document duplication, our efficient machine is up to the task. We offer fast turnaround times to ensure you get what you need when you need it.

          Our friendly and experienced staff is here to assist you with any copying requirements, from black and white to full-color copies. We take pride in delivering impeccable results.

          Visit our shop today for hassle-free photocopying services that save you time and maintain the clarity of your documents.

          Experience the difference in document reproduction quality at our shop."**
        </div>
        <img className='w-[80%] md:w-1/2 lg:w-1/3 border shadow-md shadow-black rounded-md cursor-pointer transition-all duration-1000 hover:-translate-y-5' src={photocopy} alt="" />
      </div>

      <div className='flex flex-col md:flex-row gap-10 items-center justify-center mt-5 py-5'>

        <img className='w-[80%] md:w-1/2 lg:w-1/3 border shadow-md shadow-black rounded-md cursor-pointer transition-all duration-1000 hover:-translate-y-5' src={A4sizePhoto} alt="" />
        <img className='w-[80%] md:w-1/2 lg:w-1/3 border shadow-md shadow-black rounded-md cursor-pointer transition-all duration-1000 hover:-translate-y-5' src={diffSize} alt="" />

      </div>
    </>
  )
}

export default PhotoCopy
