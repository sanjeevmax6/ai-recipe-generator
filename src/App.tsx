import { useState } from 'react'
import dog from '../assets/dog.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://sanjeevmax6.github.io/" target="_blank">
          <img src={dog} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Sanjeev's React App using Amplify</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
