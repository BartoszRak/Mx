import Matrix from '../Matrix'
import { displayMatricesDimensions } from '../helpers'

export function actPairOfMatrices(matrixA: Matrix, matrixB: Matrix, action: (valueA: number, valueB: number) => number): Matrix  {
  if (matrixA.colNum() !== matrixB.colNum() || matrixA.rowNum() !== matrixB.rowNum()) {
    throw new Error(`[Mx Math] You cannot act on 2 matrices of different sizes. ${displayMatricesDimensions([matrixA, matrixB])}`)
  }
  const tmpMatrix: number[][] = matrixA.raw().map((matrixARow: number[], rowIndex: number) => {
    return matrixARow.map((matrixACell: number, columnIndex: number) => {
      return action(matrixACell, matrixB.cell(columnIndex, rowIndex))
    })
  })
  return new Matrix(tmpMatrix)
}

export function mergePairOfMatrices(matrixA: Matrix, matrixB: Matrix): Matrix {
  return actPairOfMatrices(matrixA, matrixB, (valueA, valueB) => valueA + valueB)
}

export function subtractPairOfMatrices(matrixA: Matrix, matrixB: Matrix): Matrix {
  return actPairOfMatrices(matrixA, matrixB, (valueA, valueB) => valueA - valueB)
}

export function multiplyPairOfMatrices(matrixA: Matrix, matrixB: Matrix): Matrix {
  if (matrixA.colNum() !==  matrixB.rowNum()) {
    throw new Error(`[Mx Math] You cannot multiply matrices if number of rows is diffrent than number of columns. ${displayMatricesDimensions([matrixA, matrixB])}`)
  }
  const tmpMatrix: number[][] = matrixA.raw().map((matrixARow: number[], rowIndex: number) => {
    return matrixARow.map((matrixACell: number, columnIndex: number) => {
      return matrixARow.reduce((acc: number, currentValue: number, index: number): number => {
        return acc + (currentValue * matrixB.cell(columnIndex, index))
      }, 0)
    })
  })
  return new Matrix(tmpMatrix)
}