import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import Introduction from '../Introduction/Introduction'
import Spinner from '../Spinner/Spinner'

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
            <div className='min-h-screen'>
                {
                    navigation.state === 'loading' ? <Spinner /> : intro ? <Introduction /> : <Outlet />
                }
            </div>

        </div>
    )
}

export default Home
