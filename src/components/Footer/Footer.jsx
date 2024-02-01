import React from 'react'
import { Link } from 'react-router-dom'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {

    const menuItmes = [
        {name: 'Home', to: '/'},
        {name: 'About Me', to: '/about'},
        {name: 'Experience', to: '/experience'},
        {name: 'Contact', to: '/contact'},
        {name: 'Bookings', to: '/bookings'}
    ]

  return (
    <article className=' h-fit flex justify-between items-center py-10 px-5 bg-midnight text-knit-sweater'>
        <div className='w-1/3 '>
            <h1 className='w-4 lg:text-2xl '>
                BROOKE MACCALUM
            </h1>
            <p className='lg:text-xl'>email</p>
            <p>location</p>
        </div>
        <div className='flex flex-col w-1/3 text-center items-center '>
            <h1 className='lg:text-2xl' >Links</h1>
            <hr className='pb-3 w-2/3' />
            <div className='flex flex-col'>
            {menuItmes.map(data => {
                return  <Link to={data.to}>{data.name}</Link>
            })}
            </div>
        </div>
        <div className='flex flex-col w-1/3  items-center  '>
            <h1 className='pb-4 lg:text-xl'>Socials</h1>
           
            <div className='flex flex-col justify-between lg:flex-row'>
                <a className='py-2 px-2' href='/'><FaFacebook size={40}/></a>
                <a className='py-2 px-2' href='/'><FaInstagram size={40} /></a>
            </div>
        </div>
    </article>
  )
}
