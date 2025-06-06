import React from 'react'
import loader from '/loader.gif'
const Loading = () => {
  return (
    <div className='w-[500px] h-screen flex justify-center items-center bg-black  absolute z-20 border-8'>
      <img className=' h-[50%] object-cover z-20' src={loader} alt="" />
    </div>
  )
}

export default Loading;