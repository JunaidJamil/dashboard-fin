import React from 'react'
import Nav from './Nav'
import Chat from './Chat'

const Left = () => {
  return (<>
  <div className='sticky top-0 left-0 right-0'>

    <div className='w-[297px]'>
      <Nav/>
    </div>
   <div className='mt-10 w-[297px]'>
    <Chat/>
   </div>
  </div>
  </>
  )
}

export default Left
