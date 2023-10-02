import { useContext, useState } from 'react'
import logo from '../../assets/masterLogo.webp'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css'
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import swal from 'sweetalert';

const Navbar = () => {
    const navigate = useNavigate()

    const { user } = useContext(AuthContext)


    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                swal('Successfully LogOut')
                navigate('/login')
            })
            .catch(error => {
                swal(error.message)
            })

    }

    return (

        <>
            {
                user?.emailVerified ?
                    <div className='p-2 flex justify-between items-center'>
                        {
                            <div className='lg:hidden'>
                                {menu ? <ImCross className='text-3xl' onClick={handleMenu} /> : <AiOutlineMenuUnfold className='text-4xl' onClick={handleMenu} />}
                            </div>
                        }

                        <div className={`flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:static lg:space-x-3 absolute left-14 ${menu ? 'top-6' : '-top-[35rem]'} bg-orange-500 rounded-lg px-16 py-4 lg:px-5 transition-all duration-1000 text-white font-semibold lg:bg-white lg:text-black lg:shadow-lg lg:shadow-gray-500`}>
                            <NavLink to='/' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Home</NavLink>
                            <NavLink to='/notes' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Notes</NavLink>
                            <NavLink to='/pens' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Pens</NavLink>
                            <NavLink to={'/mobiles'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Mobiles</NavLink>
                            <NavLink to={'/gadgets'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Gadgets</NavLink>
                            <NavLink to={'/frames'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Frames</NavLink>
                            <NavLink to={'/photocopy'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>PhotoCopy</NavLink>
                            <NavLink to={'/lamination'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Lamination</NavLink>
                            <NavLink to={'/wedding'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Wedding</NavLink>
                            <NavLink to='/about' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>About</NavLink>
                            <button onClick={handleLogOut} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>LogOut</button>
                        </div>

                        <img className='w-[70px] rounded-full shadow-lg shadow-black cursor-pointer hover:animate-bounce' src={logo} alt="" />
                    </div>
                    :
                    <div className='flex justify-center mt-4 space-x-4 pb-3'>
                        <NavLink to='/login' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Login</NavLink>
                        <NavLink to='/register' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Register</NavLink>
                        <NavLink to='/about' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>About</NavLink>
                    </div>
            }
        </>

    )
}

export default Navbar