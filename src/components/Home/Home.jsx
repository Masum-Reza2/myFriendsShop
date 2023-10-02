import Navbar from './Navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const Home = () => {
    // console.log(intro)
    const navigation = useNavigation()
    return (
        <div>

            <Navbar />
            <div className='min-h-screen'>
                {
                    navigation.state === 'loading' ? <Spinner /> : <Outlet />
                }
            </div>

        </div>
    )
}

export default Home
