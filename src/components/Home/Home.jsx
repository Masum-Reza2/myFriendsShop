import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import Introduction from '../Introduction/Introduction'

const Home = () => {
    const [intro, setIntro] = useState(true);
    const handleIntro = (cond) => {
        setIntro(cond)
    }
    // console.log(intro)
    const navigation = useNavigation()
    return (
        <div>

            <Navbar handleIntro={handleIntro} />
            {
                navigation.state === 'loading'? <h1 className='text-center font-bold text-4xl'>Loading</h1> : intro ? <Introduction /> : <Outlet />
            }
            
        </div>
    )
}

export default Home
