import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <nav className='flex justify-between items-center py-4 md:px-6  text-lg max-w-[1546px] mx-auto'>
            <div className='text-3xl'>
                MNTN
            </div>

            {isOpen ? (<div className='md:hidden block'>
                <RxCross2 size={30} onClick={handleClose} />
            </div>) : (
                <div className='md:hidden block'>
                    <GiHamburgerMenu size={30} onClick={handleOpen} />

                </div>
            )}
            <ul className={`md:flex text-xl gap-10 ${isOpen ? 'block ' : 'hidden'}  transition-all md:block absolute md:static md:bg-transparent bg-black top-16 left-0 w-full md:w-auto z-10`}>

                <li className='border-b md:border-none'><a href="/" className='block py-6 px-4'>Equipment</a></li>
                <li className='border-b md:border-none'><a href="/" className='block py-6 px-4'>About Us</a></li>
                <li className='border-b md:border-none'><a href="/" className='block py-6 px-4'>Blog</a></li>
                <li className='md:hidden border-b md:border-none flex items-center gap-4 py-6 px-4'>
                    <FaRegCircleUser /><span>Account</span>
                </li>
            </ul>
            <div className='hidden md:flex gap-4 items-center'>
                <FaRegCircleUser /><span>Account</span>
            </div>
        </nav>
    );
};

export default Navbar;
