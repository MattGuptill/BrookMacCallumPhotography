import React from 'react'
import matt from '/src/assets/MatthewGuptill.jpg'

export const About = () => {
  return (
    <article className='h-fit flex flex-col px-11/12 py-10 '>
      <img src={matt} alt="an example photo of matt in front of forest scenery" />
    </article>
  )
}
