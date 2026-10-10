
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, settask] = useState([]) /*hum title and details ko store krenge as objects in the task array */ 
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask=[...task];
    copyTask.push({title,details})
    settask(copyTask)
    setTitle(' ')
    setDetails(' ')
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <h1 className='text-3xl font-bold '></h1>
      <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="flex flex-col gap-4 p-10 lg:w-1/2 items-start "
      >
        <h1 className='text-3xl font-bold'>Add Notes</h1>
       { /*Pehla input for heading */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
         />
        {/*Detailed wala input*/ }
          <textarea
            placeholder="Write Details"
            className="px-5 py-2 h-32 w-full font-medium border-2 outline-none rounded"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />

          <button
            type="submit"
            className="bg-amber-200 w-full text-black font-medium px-5 py-2 rounded"
          >
            Add Notes
          </button>


        
      </form>
      <div className=' lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap h-full mt-5 overflow-auto gap-5'>
    {task.map(function(elem,idx){
return     <div  key={idx} className='h-52 w-40 rounded-2xl text-black  p-4 bg-white'>
  <h3>{elem.title}</h3>
  <p>{elem.details}</p>
</div>
        
    })}
        </div>
      </div>
    </div>
  )
}

export default App
