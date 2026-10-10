/*import React from 'react'

const App = () => {
  const getData = async() => {
  const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
const data = await response.json()
  console.log();  
}
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default */
import React from 'react'
import axios from 'axios'
const App = () => {
  const getData = ()=>{
    axios.get('')
  }
  return (
    <div>
      
    </div>
  )
}

export default App

