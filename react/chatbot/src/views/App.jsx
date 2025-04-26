import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../styles/App.css"

const App = () => {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const chatAPI = async (prompt) => {
    setIsLoading(true)
    const response = await axios.post("http://localhost:4000/v1/chat", { prompt }, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    // console.log(response.data)
    setResponse(response.data.choices[0].message.content)
    setIsLoading(false)
  }

  // useEffect(() => {
  //   const callChatAPI = async () => {
  //     const res = await chatAPI(prompt)
  //     setResponse(res)
  //   }
  // }, [prompt])

  return (
    <div className='container'>

      <div className='input-container'>
        <input className='input-textarea' type="text" placeholder="Enter your message" onChange={(e) => setPrompt(e.target.value)} />
        <button className='input-button' onClick={() => {
          if (prompt.trim() === "") return
          chatAPI(prompt)
        }} disabled={isLoading}>{isLoading ? "Loading..." : "Send"}</button>
      </div>

      <div className='response-container'>
        <textarea className='response-textarea' name="" id="" value={response} readOnly></textarea>
      </div>

    </div>
  )
}

export default App