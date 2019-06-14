import React from 'react'
import Mx from './Mx'

//Mx test
Mx.isMx()
const myMatrix = new Mx.Matrix([
  [1, 5, 2],
  [15, 19],
  [8, 4, 2]
])
console.log('Normal matrix: ', myMatrix)

const transposedMatrix = myMatrix.transpose()
console.log('Transposed matrix: ', transposedMatrix)

const mergedMatrix = Mx.MMath.mergePairOfMatrices(myMatrix, transposedMatrix)
console.log('Merged matrix: ', mergedMatrix)

const subtractedMatrix = Mx.MMath.subtractPairOfMatrices(myMatrix, transposedMatrix)
console.log('Subtracted matrix: ', subtractedMatrix)

const multipliedMatrix = Mx.MMath.multiplyPairOfMatrices(myMatrix, transposedMatrix)
console.log('Multiplied matrix: ', multipliedMatrix)

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
