import { useState, useRef, useEffect } from 'react'
import LanguageSelector from './components/LanguageSelector.jsx'
import './App.css'

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState('eng_latn')
  const [targetLanguage, setTargetLanguage] = useState('zho_Hans')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [disabled, setDisabled] = useState(false)
  const worker = useRef(null) // 响应式web worker对象

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL("./worker.js", import.meta.url), {
        type: 'module'
      })
    }

    worker.current.addEventListener('message', (e) => {
      console.log(e)
    })


    worker.current.postMessage({
      text: 123
    })

    return () => {
      // 组件销毁时,终止web worker
      // worker.current.terminate()
    }

  })

  const translate = async () => {
    setDisabled(true)
    // ai 处理耗时 event loop 无法解决实际问题
    // 前端加密,压缩,AI处理 => 使用多线程 web worker解决
    // web worker => html5 浏览器提供的多线程解决方案
    // Web Workers 不能直接访问 DOM，也不能使用 window 对象。它们只能通过 postMessage 和 onmessage 方法来发送和接收消息
  }

  return (
    <>
      <h1>Transformers</h1>
      <p>HuggingFace NLP js库 端模型</p>

      <div className='container'>

        <LanguageSelector
          type='Source'
          defaultLanguage={sourceLanguage}
          onChange={x => setSourceLanguage(x.target.value)}
        />

        <LanguageSelector
          type='Target'
          defaultLanguage={targetLanguage}
          onChange={x => setTargetLanguage(x.target.value)}
        />
      </div>

      <div className="textbox-container">
        <textarea value={input} row={3} onChange={(e) => { setInput(e.target.value) }}></textarea>

        <textarea value={output} row={3} readOnly></textarea>
      </div >

      <button disabled={disabled} onClick={translate}>翻译</button>
    </>
  )

}

export default App