# **Mx - Matrices computing library**

# Reference
## Core
### `Create new matrix`
```javascript
import Mx from 'mx-computing'
const matrix = new Mx.Matrix([
    [1, 2],
    [4, 3],
])
```

### `Get matrix cell`
```javascript
import Mx from 'mx-computing'
const matrix = new Mx.Matrix([
    [4, 1, 16],
    [2, 23, 3],
])
matrix.cell(2, 0) // returns 1
```

### `Get matrix row and rows number`
```javascript
import Mx from 'mx-computing'
const matrix = new Mx.Matrix([
    [51, 22],
    [44, 36],
])
matrix.row(0) // returns [51, 22]
matrix.rowNum() // returns 2
```

### `Get matrix column and columns number`
```javascript
import Mx from 'mx-computing'
const matrix = new Mx.Matrix([
    [4, 12],
    [7, 8],
])
matrix.column(1) // returns [12, 8]
matrix.colNum() // return 2
```

### `Transpose matrix`
```javascript
import Mx from 'mx-computing'
const matrix = new Mx.Matrix([
    [4, 7],
    [8, 6],
])
const transposedMatrix = matrix.transpose()
```

## Math

### `Merge pair of matrices`
```javascript
import Mx from 'mx-computing'
const firstMatrix = new Mx.Matrix([
    [4, 12],
    [7, 8],
])
const secondMatrix = new Mx.Matrix([
    [14, 7],
    [86, 5],
])
const mergedMatrix = Mx.MMath.mergePairOfMatrices(firstMatrix, secondMatrix)
```

### `Subtract pair of matrices`
```javascript
import Mx from 'mx-computing'
const firstMatrix = new Mx.Matrix([
    [7, 4],
    [2, 77],
])
const secondMatrix = new Mx.Matrix([
    [7, 47],
    [22, 4],
])
const subtractedMatrix = Mx.MMath.subtractPairOfMatrices(firstMatrix, secondMatrix)
```

### `Multiply pair of matrices`
```javascript
import Mx from 'mx-computing'
const firstMatrix = new Mx.Matrix([
    [6, 5],
    [3, 1],
])
const secondMatrix = new Mx.Matrix([
    [6, 7],
    [9, 2],
])
const multipliedMatrix = Mx.MMath.multiplyPairOfMatrices(firstMatrix, secondMatrix)
```

### `Act pair of matrices`
```javascript
import Mx from 'mx-computing'
const firstMatrix = new Mx.Matrix([
    [6, 5],
    [3, 1],
])
const secondMatrix = new Mx.Matrix([
    [6, 7],
    [9, 2],
])
const actedx.MMath.actPairOfMatrices(firstMatrix, secondMatrixm (valueA, valueB) => valueA + valueB - 2)
```

# Available Scripts
In the project directory, you can run:

## `yarn`
Install required dependencies

## `yarn start`
Open [http://localhost:3000](http://localhost:3000) with auto-refresh

## `yarn lib`
Built library final versions that will be placed in `/lib` directory

# Bash scripts
In the proroject directory /scripts, you can ron following bash scripts:

## `test-and-build.sh`
Test and build library by `yarn test` and `yarn build` automatically.

## `publish.sh`
Publish library to npm registry.
*Note that you are not albe to run that script because you are not equipped with npm auth token. That is just additional informaiton
