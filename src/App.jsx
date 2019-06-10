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
const transposedMatrix = myMatrix.transpose()
console.log(transposedMatrix)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mx Computing</h1>
        <h2>Matrices computing library</h2>
        <p>Open console to see what is going on.</p>

        <a href="https://github.com/BartoszRak/Mx">Github epository</a><br/>
        <a href="https://bartoszrak.com/">Author website</a>
      </header>
    </div>
  )
}

export default App
