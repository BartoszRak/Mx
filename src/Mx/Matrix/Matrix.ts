import { isMx } from '../composition'

class Matrix {
    constructor(
        private _data: Array<Array<number>>
    ) {}

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