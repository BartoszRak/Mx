import React from 'react'
import Mx from './Mx'

//Mx test
Mx.isMx()
const myMatrix = new Mx.Matrix([
  [1, 5, 2],
  [15, 19],
  [8, 4, 2]
])
console.log(myMatrix.isMx())
console.log(myMatrix)
console.log(myMatrix.cell(1, 1))
console.log(myMatrix.column(1))
console.log(myMatrix.row(1))

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
