# **Mx - Matrices computing library**

# Code examples

## `Create new matrix`
```javascript
new Mx.Matrix(number[][], number = 0)
```
### Examples
```javascript
const myMatrix1 = new Mx.Matrix([
  [1, 5, 2],
  [15, 19, 3],
  [8, 4, 2]
])

// Creates matrix:
// 1  5  2
// 15 19 3
// 8  4  2

const myMatrix2 = new Mx.Matrix([
  [4, 2],
  [6],
  [58, 4, 22]
])

// Creates matrix:
// 4  2  0
// 6  0  0
// 58 4  22

const myMatrix3 = new Mx.Matrix([
  [4, 2],
  [6],
  [58, 4, 22]
], 13)

// Creates matrix:
// 4  2  13
// 6  13  13
// 58 4  22
```

## `Get matrix cell`
```javascript
MyMatrixObject.cell(number, number)
```
### Examples
```javascript
const myMatrix = new Mx.Matrix([
  [1, 5],
  [7, 8],
])

myMatrix.cell(0, 1)
// Returns: 7
```

## `Get matrix column`
```javascript
MyMatrixObject.column(number)
```
### Examples
```javascript
const myMatrix = new Mx.Matrix([
  [1, 5, 4],
  [7, 8, 2],
  [2, 51, 12],
])

myMatrix.column(2)
// Returns: [4, 2, 12]
```

## `Get matrix columns number`
```javascript
MyMatrixObject.colNum()
```
### Examples
```javascript
const myMatrix = new Mx.Matrix([
  [1, 5, 4],
  [2, 51, 12],
])

myMatrix.colNum()
// Returns: 3
```

## `Get matrix row`
```javascript
MyMatrixObject.row(number)
```
### Examples
```javascript
const myMatrix = new Mx.Matrix([
  [1, 5, 4],
  [7, 8, 2],
  [2, 51, 12],
])

myMatrix.row(1)
// Returns: [7, 8, 2]
```

## `Get matrix rows number`
```javascript
MyMatrixObject.rowNum()
```
### Examples
```javascript
const myMatrix = new Mx.Matrix([
  [1, 5, 4],
  [2, 51, 12],
])

myMatrix.rowNum()
// Returns: 2
```

## `Get matrix raw data`
```javascript
MyMatrixObject.raw()
```
### Examples
```javascript
const myMatrix = new Mx.Matrix([
  [1, 5],
  [7, 8]
])

myMatrix.raw()
// Returns: [[1, 5], [7, 8]]
```

## `Transpose matrix`
```javascript
MyMatrixObject.transpose()
```
### Examples
```javascript
const myMatrix = new Mx.Matrix([
  [1, 5, 4],
  [7, 8, 2],
  [2, 51, 12],
])

const myTransposedMatrix = myMatrix.transpose()
// Returns new Mx.Matrix with data: 
// 1  7  2
// 5  8  51
// 4  2  12
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
`* Note that you are not albe to run that script because you are not equipped with npm auth token. That is just additional informaiton`
