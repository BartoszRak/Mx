import { isMx } from '../composition'

class Matrix {

    private _data: Array<Array<number>>

    constructor(data: Array<Array<number>>) {
        this._data = this.fillEmptyCells(data)
    }

    private fillEmptyCells = (matrix: Array<Array<number>>, fillValue: number = 0): Array<Array<number>> => {
        const longestRow: number = matrix.reduce((acc: number, currValue: Array<number>) => {
            if (currValue.length > acc) return currValue.length
            return acc
        }, 0)
        const newMatrix = matrix.map(row => {
            const newRow: Array<number> = [ ...row ]
            for (let i: number = 0; i < longestRow; i++) {
                if (!newRow[i]) {
                    newRow[i] = fillValue
                } else {
                    newRow[i] = newRow[i]
                }
            }
            return newRow
        })
        return newMatrix
    }

    public cell = (column: number, row: number): number => {
        return this._data[row][column]
    }

    public row = (row: number): Array<number> => {
        return this._data[row]
    }

    public column = (column: number): Array<number> => {
        return this._data.reduce((acc: Array<number>, currVal: Array<number>) => {
            return [ ...acc, currVal[column]]
        }, [])
    }

    public isMx = isMx
}

export default Matrix