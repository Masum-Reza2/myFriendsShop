import { useNavigate, useRouteError } from 'react-router-dom'
import './errorPage.css'

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    // console.log(error)
    const handleHome = () => {
        navigate('/')
    }
    return (
        <div className='errorContainer'>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-blue-600 text-3xl text-center  md:text-7xl textshadow'>Oops</h1>
                <h1 className='text-blue-600 text-3xl text-center  md:text-7xl textshadow'>You came to the Dinosaures world</h1>
                <h2 className='text-blue-600 text-3xl text-center  md:text-7xl textshadow'>{error.statusText || error.message}</h2>
                <button onClick={handleHome} className='bg-red-500 px-3 py-1 rounded-md text-white mt-2 font-bold'>Goto Home</button>
            </div>
        </div>
    )
}

export default ErrorPage