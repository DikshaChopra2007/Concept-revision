import React from 'react'

const App = () => {
  const sumbitHandler =(elem)=>{
    e.preventDefault(   )
    console.log('Form Submitted');
  }
  return (
    <div>
      <form onSubmit={(elem)=>
        sumbitHandler(elem)
      }>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
