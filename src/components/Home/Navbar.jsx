import React, { useState } from 'react'
import logo from '../../assets/masterLogo.webp'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = ({ handleIntro }) => {

    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav>
            <div className='p-2 flex justify-between items-center'>
                {
                    <div className='lg:hidden'>
                        {menu ? <ImCross className='text-3xl' onClick={handleMenu} /> : <AiOutlineMenuUnfold className='text-4xl' onClick={handleMenu} />}
                    </div>
                }

                <div className={`flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:static lg:space-x-3 absolute left-14 ${menu ? 'top-6' : '-top-[35rem]'} bg-orange-500 rounded-lg px-16 py-4 lg:px-8 transition-all duration-1000 text-white font-semibold lg:bg-white lg:text-black lg:shadow-lg lg:shadow-gray-500`}>
                    <NavLink onClick={handleIntro} to='/notes' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Notes</NavLink>
                    <NavLink onClick={handleIntro} to='/pens' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Pens</NavLink>
                    <NavLink onClick={handleIntro} to={'/mobiles'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Mobiles</NavLink>
                    <NavLink onClick={handleIntro} to={'/chargers'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Chargers</NavLink>
                    <NavLink onClick={handleIntro} to={'/gadgets'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Gadgets</NavLink>
                    <NavLink onClick={handleIntro} to={'/frames'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Frames</NavLink>
                    <NavLink onClick={handleIntro} to={'/photocopy'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>PhotoCopy</NavLink>
                    <NavLink onClick={handleIntro} to={'/lamination'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Lamination</NavLink>
                    <NavLink onClick={handleIntro} to={'/wedding'} className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>Wedding</NavLink>
                    <NavLink onClick={handleIntro} to='/about' className='border px-4 text-center py-1 rounded-md shadow-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]'>About</NavLink>
                </div>

                <img className='w-[70px] rounded-full shadow-lg shadow-black cursor-pointer hover:animate-bounce' src={logo} alt="" />
            </div>
        </nav>
    )
}

export default Navbar