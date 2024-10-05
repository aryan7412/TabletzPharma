import React from 'react'
import {FAQ,Hero,Blogs,Reviews} from '../components/cmp'

function Home() {
  return (
    <div>
      <Hero/>
      <Blogs/>
      <Reviews/>
      <FAQ/>
    </div>
  )
}

export default Home