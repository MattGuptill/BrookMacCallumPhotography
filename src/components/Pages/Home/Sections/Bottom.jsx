import React from 'react'

export const Bottom = () => {
  return (
    <article className='h-dvh flex flex-col md:flex-row '>
        <div className='h-1/2 flex justify-center items-center bg-camel-coat
                        md:h-auto md:w-1/2'>
            <div className='flex flex-col items-center text-center '>
                <h1 className='text-4xl pb-5 lg:text-5xl'>
                    SAMPLE TEXT HERE
                </h1 >
                <hr className='pb-5 w-2/3'/>
                <p className='text-2xl pb-5 lg:text-4xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, magnam.
                </p>
                <a className='py-2 px-5 text-xl bg-knit-sweater 
                border-midnight border-2 hover:border-knit-sweater 
                hover:bg-midnight hover:text-knit-sweater shadow-2xl 
                transition-all duration-200 lg:mt-10 lg:py-3 lg:px-7 lg:text-3xl' href="/bookings">
                    BOOK NOW
                </a>
            </div>
        </div>
        <div className="h-1/2 bg-[url('./assets/forest-products.jpg')] bg-cover md:h-auto md:w-1/2">
            
        </div>
    </article>
  )
}
