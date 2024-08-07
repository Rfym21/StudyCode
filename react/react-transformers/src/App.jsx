import { useState, useRef, useEffect } from 'react'
import LanguageSelector from './components/LanguageSelector'
import './App.css'
import Progress from './components/Progress'

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState('zho_Hans')
  const [targetLanguage, setTargetLanguage] = useState('eng_Latn')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [progressItems, setProgressItems] = useState([])
  const [ready, setReady] = useState(true);
  const worker = useRef(null) // 响应式 web worker 对象

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL("./worker.js", import.meta.url), {
        type: 'module'
      }
      )

      worker.current.addEventListener('message', (e) => {
        switch (e.data.status) {
          case 'initiate':
            setReady(false)
            setProgressItems((prev) => [...prev, e.data])
            break
          case 'progress':
            setProgressItems(
              prev => prev.map(item => {
                if (item.file === e.data.file) {
                  return { ...item, progress: e.data.progress };
                } else {
                  return item;
                }
              })
            )
            break
          case 'done':
            setProgressItems(prev => prev.filter(
              item => item.file !== e.data.file
            ))
            break
          case 'ready':
            setReady(true)
            break
          case 'update':
            setOutput(e.data.output)
            break
          case 'complete':
            setDisabled(false)
            break
        }
      })

    }

    return () => {
      // onUnMounted
      // console.log('unmounted')
      // worker.current = null
    }
  })

  const translate = () => {
    setDisabled(true)
    worker.current.postMessage({
      text: input,
      src_lang: sourceLanguage,
      tgt_lang: targetLanguage
    })
  }

  return (
    <>
      <h1>Transformers.js</h1>
      <p>来自HuggingFace 抱抱脸社区的NLP js库，完成常见AI 任务</p>
      <p>未来端模型将大放异彩</p>
      <div className="container">
        <LanguageSelector
          type="Source"
          defaultLanguage={sourceLanguage}
          onChange={x => setSourceLanguage(x.target.value)}
        />
        <LanguageSelector
          type="Target"
          defaultLanguage={targetLanguage}
          onChange={x => setTargetLanguage(x.target.value)}
        />

      </div>
      <div className="textbox-container">
        <textarea
          value={input}
          row={3}
          onChange={(e) => setInput(e.target.value)}  >
        </textarea>
        <textarea
          value={output}
          row={3}
          readOnly>
        </textarea>
      </div>
      <button disabled={disabled} onClick={translate}>Translate</button>
      <div className="progress-bars-container">
        {
          ready === false && (
            <label>Loading models...</label>
          )
        }
        {progressItems.map((data) => (
          <div key={data.file}>
            <Progress text={data.file} percentage={data.progress} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App 