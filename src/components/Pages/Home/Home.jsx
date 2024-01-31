import React from 'react'
import { Top } from './Sections/Top'
import { Middle } from './Sections/Middle'
import { Lower } from './Sections/Lower'
import { Bottom } from './Sections/bottom'

export const Home = () => {
  return (
    <article>
      <Top />
      <Middle />
      <Lower />
      <Bottom />
    </article>
  )
}
