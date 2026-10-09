import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
         <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>
            1
         </h2>
         <div>
            <p className='text-lg leading-[2] text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa expedita iusto nobis in?</p>
         </div>
         <div>
            <button className='bg-blue-600 text-white font-semibold px-7 py-3 rounded-3xl'>{props.tag}</button>
         </div>
    </div>
    </div>
  )
}

export default RightCardContent
