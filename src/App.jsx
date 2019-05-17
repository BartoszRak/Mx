import React from 'react'
import Mx from './Mx/index'

//Mx test
Mx.isMx()
const myMatrix = new Mx.Matrix()
console.log(myMatrix.isMx())
console.log(myMatrix)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
