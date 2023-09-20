import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Introduction from '../Introduction/Introduction'

const Home = () => {
    const [intro, setIntro] = useState(true);
    const handleIntro = (cond) => {
        setIntro(cond)
    }
    console.log(intro)
    return (
        <div>

            <Navbar handleIntro={handleIntro} />
            {
                intro ? <Introduction /> : <Outlet />
            }
            
        </div>
    )
}

export default Home
