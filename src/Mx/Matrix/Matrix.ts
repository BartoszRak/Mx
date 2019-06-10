class Matrix {

    private _data: number[][]

    constructor(data: number[][]) {
        this._data = this.fillEmptyCells(data)
    }

    private fillEmptyCells(matrix: number[][], fillValue: number = 0): number[][] {
        const longestRow: number = matrix.reduce((acc: number, currValue: number[]) => {
            if (currValue.length > acc) return currValue.length
            return acc
        }, 0)
        const newMatrix = matrix.map(row => {
            const newRow: number[] = [ ...row ]
            for (let i: number = 0; i < longestRow; i++) {
                if (!newRow[i]) {
                    newRow[i] = fillValue
                }
            }
            return newRow
        })
        return newMatrix
    }

    private transpose(): Matrix {
        const newRaw = this.raw().reduce((accArr: number[][], row: number[], rowIndex: number) => {
            const newAcc: number[][] = [ ...accArr ]
            row.forEach((rowValue, rowValueIndex) => {
                if (!newAcc[rowValueIndex]) newAcc[rowValueIndex] = []
                newAcc[rowValueIndex][rowIndex] = rowValue
            })
            return newAcc
        }, [])
        return new Matrix(newRaw)
    }

    public raw(): number[][] {
        return this._data
    }

    public cell(column: number, row: number): number {
        return this.raw()[row][column]
    }

    public row(row: number): number[] {
        return this.raw()[row]
    }

    public column(column: number): number[] {
        return this.raw().reduce((acc: number[], currVal: number[]) => {
            return [ ...acc, currVal[column]]
        }, [])
    }

    public isMx(): boolean { return true }
}

export default Matrix