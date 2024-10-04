import React from 'react'
import {FAQ,Hero,Loader,Reviews} from '../components/cmp'

function Home() {
  return (
    <div>
      <Hero/>
      <Reviews/>
      <FAQ/>
    </div>
  )
}

export default Home