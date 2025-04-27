import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import "../styles/App.css"

const App = () => {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a helpful assistant."
    }
  ])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const chatAPI = async (messages) => {
    setIsLoading(true)
    try {
      const response = await axios.post("http://localhost:4000/v1/chat", { messages }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      // console.log(response.data)
      const newMessages = [...messages, { role: "assistant", content: response.data.choices[0].message.content }]
      setMessages(newMessages)
      setResponse(response.data.choices[0].message.content)
      localStorage.setItem("messages", JSON.stringify(newMessages))
    } catch (error) {
      console.error("Error calling API:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages")
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }
  }, []) // 空依赖数组，只在组件挂载时运行一次

  const handleSend = async () => {
    if (prompt.trim() === "") return
    
    // 创建新的消息数组，包含用户的新消息
    const updatedMessages = [...messages, { role: "user", content: prompt }]
    
    // 立即更新状态
    setMessages(updatedMessages)
    
    // 使用更新后的消息数组调用API
    await chatAPI(updatedMessages)
    
    setPrompt("") // 清空输入框
  }

  // 展示聊天消息
  const renderMessages = () => {
    // 过滤掉系统消息
    return messages
      .filter(msg => msg.role !== "system")
      .map((msg, index) => (
        <div key={index} className={`message ${msg.role === "user" ? "user-message" : "assistant-message"}`}>
          <div className="message-content">{msg.content}</div>
        </div>
      ));
  }

  return (
    <div className='container'>
      <div className='response-container'>
        {messages.length <= 1 ? (
          <div className="welcome-message">
            <h1>欢迎使用聊天机器人</h1>
            <p>请在下方输入框中发送消息开始对话</p>
          </div>
        ) : (
          renderMessages()
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className='input-container'>
        <input 
          className='input-textarea' 
          type="text" 
          value={prompt}
          placeholder="请输入消息..." 
          onChange={(e) => setPrompt(e.target.value)} 
          onKeyUp={(e)=>{
            if (e.key === "Enter") {
              handleSend()
            }
          }}
        />
        <button 
          className='input-button' 
          onClick={handleSend} 
          disabled={isLoading}
        >
          {isLoading ? "发送中..." : "发送"}
        </button>
      </div>
    </div>
  )
}

export default App