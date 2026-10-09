
import { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('Sarthak')
const [num, setNum] = useState(20)
const [users, setUsers] = useState([10,20,30])

  function changeNum() {
    setNum(30)
    setUsername('Aman')
  }

  return (
    <div>
      <h1>Value of num is {num}<br/>value of user is {username}</h1>
      <button onClick={changeNum}>CLICK</button>
    </div>
  )
}

export default App