import React, { useState } from 'react'

const App = () => {
  let [username,setUsername]=useState("")
  let [password,setPassword]=useState("")
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(username,password);
  }
  return (
    <div><form action="">
      <label htmlFor="Username">Username:</label>
      <input type="text" id='Username' onChange={(e)=>{
        setUsername(e.target.value)
      }} /><br/><br />
      <label htmlFor="pass">Password:</label>
      <input type="text" id='pass' onChange={(e)=>{
        setPassword(e.target.value)
      }} /><br/><br />
      <button onClick={handleSubmit}>Submit</button>
      </form></div>
  )
}

export default App