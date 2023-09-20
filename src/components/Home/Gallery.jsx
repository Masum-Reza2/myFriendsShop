import React from 'react'
import wed1 from '../../assets/wedding-1.jpg'
import wed2 from '../../assets/wed-2.jpg'
import wed3 from '../../assets/wed-3.jpg'
import wed4 from '../../assets/wed-4.jpg'
import wed5 from '../../assets/wed-5.jfif'
import wed6 from '../../assets/wed-6.jpg'
import wed7 from '../../assets/wed-7.jpg'
import wed8 from '../../assets/wed-8.jpg'
import wed9 from '../../assets/wed-9.jpg'
import wed10 from '../../assets/wed-10.jpg'
import wed11 from '../../assets/wed-11.jpeg'
import wed12 from '../../assets/wed-12.png'
import wed13 from '../../assets/wed-13.jpg'


const Gallery = () => {
    return (
        <>
            <h1 className='text-center py-5 text-2xl' style={{ textShadow: '1px 1px 1px red' }}>Our Gallery</h1>

            <div className=' w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <img className='rounded-lg w-full' src={wed1} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed2} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed3} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed4} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed5} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed6} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed7} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed8} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed9} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed10} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed11} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed12} alt="Wedding image" />
                <img className='rounded-lg w-full' src={wed13} alt="Wedding image" />

            </div>
        </>
    )
}

export default Gallery
