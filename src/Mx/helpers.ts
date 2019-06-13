import Matrix from './Matrix'

export const displayMatricesDimensions = (matrices: Matrix[]) => {
  matrices.forEach((matrix: Matrix, index: number) => {
    matrix.displayDimensions()
  })
}
