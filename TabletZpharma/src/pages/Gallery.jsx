import React from 'react'
import Photos from '../components/Photos'

function Gallery() {
  return (
    <div>
      {/* Heading */}
      <div className='text-5xl font-bold text-center my-5'>GALLERY</div>
      {/* Tagline */}
      <div className='text-center'>Images</div>
      <hr className='my-5 ml-64 w-[900px] border-black border-[1px]' />
      <Photos/>
    </div>
  )
}

export default Gallery