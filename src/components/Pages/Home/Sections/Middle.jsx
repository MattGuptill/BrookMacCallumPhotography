import React from 'react'
import matt from '/src/assets/MatthewGuptill.jpg'
import colors from '/src/assets/colors.jpg'

export const Middle = () => {
  return (
    <article className='bg-midnight text-knit-sweater h-dvh flex justify-center items-start overflow-hidden '>
        
        <div className='flex flex-col justify-evenly items-center h-full lg:flex-row lg:w-11/12'>
            
            <div className='sticky flex justify-center'>
              <img className='w-64 rounded-t-full relative left-20 top-10 z-10 sm:w-80 shadow-2xl lg:w-[25rem] ' src={matt} alt="" />
              <img className='w-60 relative shadow-lg right-20 sm:w-72 lg:w-[25rem]' src={colors} alt="" />
            </div>
            
          <div className='flex flex-col items-center text-center px-4 pt-5 lg:w-1/2 '>
            <hr className='hidden sm:flex border-cranberry mb-10 w-11/12' />
            <h1 className='text-3xl lg:text-5xl'>
              Lorem ipsum dolor sit amet
              </h1>
              <hr className='my-2  border-cranberry place-self-start w-full lg:hidden  ' />
            <p className='text-lg lg:text-2xl lg:pt-10'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident corporis aspernatur, 
              sit neque accusantium cumque et illo deserunt expedita eum?
            </p>
            <hr className='hidden sm:flex border-cranberry mt-10 w-11/12' />
          </div>

        </div>
        
    </article>
  )
}
