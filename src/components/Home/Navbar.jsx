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
                    <div className='md:hidden'>
                        {menu ? <ImCross className='text-3xl' onClick={handleMenu} /> : <AiOutlineMenuUnfold className='text-4xl' onClick={handleMenu} />}
                    </div>
                }

                <div className={`flex flex-col space-y-2 md:space-y-0 md:flex-row md:static md:space-x-3 absolute left-14 ${menu ? 'top-6' : '-top-[35rem]'} bg-orange-500 rounded-lg px-16 py-4 md:px-8 transition-all duration-1000 text-white font-semibold`}>
                    <NavLink onClick={handleIntro} to='/notes' className='border px-4 text-center py-1 rounded-md'>Notes</NavLink>
                    <NavLink onClick={handleIntro} to='/pens' className='border px-4 text-center py-1 rounded-md'>Pens</NavLink>
                    <NavLink onClick={handleIntro} to={'/mobiles'} className='border px-4 text-center py-1 rounded-md'>Mobiles</NavLink>
                    <NavLink onClick={handleIntro} to={'/chargers'} className='border px-4 text-center py-1 rounded-md'>Chargers</NavLink>
                    <NavLink onClick={handleIntro} to={'/gadgets'} className='border px-4 text-center py-1 rounded-md'>Gadgets</NavLink>
                    <NavLink onClick={handleIntro} to={'/frames'} className='border px-4 text-center py-1 rounded-md'>Frames</NavLink>
                    <NavLink onClick={handleIntro} to={'/photocopy'} className='border px-4 text-center py-1 rounded-md'>PhotoCopy</NavLink>
                    <NavLink onClick={handleIntro} to={'/lamination'} className='border px-4 text-center py-1 rounded-md'>Lamination</NavLink>
                    <NavLink onClick={handleIntro} to={'/wedding'} className='border px-4 text-center py-1 rounded-md'>Wedding</NavLink>
                    <NavLink onClick={handleIntro} to='/about' className='border px-4 text-center py-1 rounded-md'>About</NavLink>
                </div>

                <img className='w-[70px] rounded-full shadow-lg shadow-black' src={logo} alt="" />
            </div>
        </nav>
    )
}

export default Navbar