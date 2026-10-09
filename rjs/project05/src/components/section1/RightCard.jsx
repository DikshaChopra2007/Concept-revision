import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative rounded-3xl w-80 '>
      
      <img  className='h-full w-full rounded-4xl  object-cover' src={props.img}></img>
   <RightCardContent tag={props.tag}/>
    </div>
  )
}

export default RightCard
