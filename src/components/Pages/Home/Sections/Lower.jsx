import React from 'react'
import { Link } from 'react-router-dom'
import matt from '/src/assets/MatthewGuptill.jpg'

export const Lower = () => {

    const divStyle = 'relative shadow-2xl mt-10'
    const title = 'text-lg text-knit-sweater absolute bg-midnight py-1 px-7 shadow-2xl left-[-2rem] top-3 '
    const image = 'h-60 hover:h-64 transition-size border-2 border-midnight duration-200 xl:h-80 xl:hover:h-96 '

    const linkPhotos = [
        {name: "Experience", to: '/experience', img: matt, alt: 'image description', id: 1 },
        {name: "Contact", to: '/contact', img: matt, alt: 'image description', id: 2  },
        {name: "Bookings", to: '/bookings', img: matt, alt: 'image description', id: 3 }
    ]

  return (
    <article className='h-fit flex flex-col  items-center bg-knit-sweater justify-evenly lg:h-dvh '>
        
        <hr className='w-4/5 border-midnight '/>

        <div className='flex flex-col py-16 w-full justify-evenly items-center lg:flex-row lg:py-auto lg:items-center'>
        {linkPhotos.map((data) => {
            return <Link key={data.id} to={data.to}>
                <div className={divStyle}>
                    <h1 className={title}>{data.name}</h1>
                    <img className={image} src={data.img} alt={data.alt} />
                </div>
            </Link>
            
        })}
       </div>

       <hr className='w-4/5 border-midnight '/>

    </article>
  )
}
