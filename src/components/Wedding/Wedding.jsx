import React from 'react'
import Gallery from '../Home/Gallery'
import profile from '../../assets/wedShooter.jpg'

const Wedding = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto gap-5'>
        <img className='w-full md:w-1/3 lg:w-1/6 rounded-lg mt-5' src={profile} alt="" />
        <div className='flex-1 font-semibold text-sm md:text-base'>
          Welcome to <span className='font-bold'>Rahul Digital Studio</span> Photography, where your love story takes center stage. With an eye for emotion and a passion for storytelling, I specialize in capturing the essence of your wedding day.

          From intimate moments to grand celebrations, I'm committed to creating timeless images that encapsulate your unique connection. Explore my portfolio to witness the magic I've crafted for other couples.

          Whether you're planning a local ceremony or a destination escape, I'm here to ensure your memories are preserved beautifully. Contact me today, and let's turn your wedding into a captivating narrative of love."**
        </div>
      </div>

      <Gallery />
    </>
  )
}

export default Wedding
