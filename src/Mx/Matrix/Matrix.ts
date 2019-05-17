import { isMx } from '../composition'

class Matrix {
    constructor(
        private _data: Array<Array<number>>
    ) {}

    public isMx: () => boolean = isMx
}

export default Matrix