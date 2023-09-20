import React from 'react'
import laminPhoto from '../../assets/lamination.jpg'

const Lamination = () => {
  return (
    <div className='h-fit pt-5 flex flex-col-reverse md:flex-col items-center justify-center w-[90%] mx-auto'>
      <div>
        Welcome to our shop, your destination for professional document enhancement. With our state-of-the-art lamination machine, your important papers are in expert hands.

        Lamination not only protects your documents from wear and tear but also adds a touch of professionalism to your presentations, ID cards, certificates, and more.

        Our skilled team ensures flawless lamination results, giving your documents a sleek, glossy finish that stands the test of time.

        Visit our shop today to experience the transformative power of lamination and enhance the durability and appeal of your important documents.

        Trust us to provide the quality lamination service your documents deserve."**
      </div>
      <img className='w-[80%] md:w-1/2 lg:w-1/3 border shadow-md shadow-black rounded-md cursor-pointer transition-all duration-1000 hover:-translate-y-5' src={laminPhoto} alt="" />
    </div>
  )
}

export default Lamination
