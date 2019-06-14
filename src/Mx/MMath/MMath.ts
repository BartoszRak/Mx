import Matrix from '../Matrix'
import { displayMatricesDimensions } from '../helpers'

export function mergePairOfMatrices(matrixA: Matrix, matrixB: Matrix) {
  if (matrixA.colNum() !== matrixB.colNum() || matrixA.rowNum() !== matrixB.rowNum()) {
    throw new Error(`[Mx Math] You cannot merge 2 matrices of different sizes. ${displayMatricesDimensions([matrixA, matrixB])}`)
  }
  const tmpMatrix: number[][] = matrixA.raw().map((matrixARow: number[], rowIndex: number) => {
    return matrixARow.map((matrixACell: number, columnIndex: number) => {
      return matrixACell + matrixB.cell(columnIndex, rowIndex)
    })
  })
  return new Matrix(tmpMatrix)
}