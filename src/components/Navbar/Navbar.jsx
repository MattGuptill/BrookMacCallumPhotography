import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import { motion } from "framer-motion" 

import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Navbar () {
    //logic
    const menuItmes = [
        {name: 'Home', to: '/'},
        {name: 'About Me', to: '/about'},
        {name: 'Experience', to: '/experience'},
        {name: 'Contact', to: '/contact'},
        {name: 'Bookings', to: '/bookings'}
    ]

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(prevOpen => !prevOpen)
    }

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
        },
        exit:{
            scaleY:0,
        },
    };

    const underlineVars = {
        initial: {
            scaleX: 0,
        },
        animate: {
            scaleX: 1,
        },
        exit: {
            scaleX: 0,
        }
    }

    //styling
    const nav = ' absolute flex w-full py-4 justify-center bg-transparent'
    const menuOpen = 'fixed  left-0 top-0 w-full h-screen'
    const linkList = 'flex flex-col items-center text-center '
    
    const link = 'hover:bg-mug hover:text-knit-sweater transition-color duration-200  px-3 py-2 active:bg-steel-blue text-4xl lg:text-6xl'
    const socials = 'flex justify-evenly w-full pt-10'


    return (
    <header>
        <nav className={nav}>
            <Link className='font-titles text-4xl lg:text-5xl ' to='/'>Brooke MacCalum</Link>
            
            <div onClick={toggleMenu} className='absolute right-3 top-5 '>
                <FaBars size={23} />
            </div>
        </nav>
        {openMenu && (
        <motion.div 
        variants={menuVars} 
        initial="initial"
        animate="animate"
        exit="exit"
        className='fixed flex flex-col justify-center items-center top-0 left-0 w-full h-screen bg-mug p-4 origin-top z-20'>
             <Link className='font-titles text-4xl lg:text-5xl place-self-center pb-10 ' to='/'>Brooke MacCalum</Link>
             <div onClick={toggleMenu} className='absolute right-3 top-5 '>
                <MdClose size={28} />
            </div>
            <div className={openMenu ? {menuOpen} : 'hidden'}>
                <ul className={linkList}>
                    {menuItmes.map(data => {
                        return <NavLink className={link} onClick={toggleMenu}  to={data.to}>{data.name}</NavLink>
                    })}
                    
                </ul>
                <ul className={socials}>
                    <li>
                        <a 
                            className='hover:text-knit-sweater transition-color duration-200 ' 
                            href="https://www.instagram.com/brookemaccallumphotography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                            target='_blank'>
                                <FaInstagram size={50} />
                        </a>
                    </li>

                    <li>
                        <a 
                            className='hover:text-knit-sweater transition-color duration-200 ' 
                            href="https://www.facebook.com/brooke.maccallum" 
                            target='_blank' >
                                <FaFacebook size={50} />
                        </a>
                    </li>
                </ul>
            </div> 
        </motion.div>
        )}
    </header>
    )


  
}
