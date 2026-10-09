
import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className="h-full p-7 w-2/3 flex flex-nowrap overflow-x-auto gap-6">
      {props.users.map(function (elem) {
        return (
          <RightCard key={elem.id} img={elem.img} />
        )
      })}
    </div>
  )
}

export default RightContent