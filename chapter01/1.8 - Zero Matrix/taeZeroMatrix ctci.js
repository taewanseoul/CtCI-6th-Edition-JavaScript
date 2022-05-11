/* Helper Functions */
var setZeroes = function(matrix) {
  function nullifyRow(matrix, row) {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
    }
  }

  function nullifyColumn(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  let rowHasZero = false;
  let colHasZero = false;

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      rowHasZero = true;
      break;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix, i);
    }
  }

  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      nullifyColumn(matrix, j);
    }
  }

  if (rowHasZero){
    nullifyRow(matrix, 0);
  }

  if (colHasZero) {
    nullifyColumn(matrix, 0);
  }
};


// Testing
var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

console.log('before');
printMatrix(testMatrix);

zeroMatrix(testMatrix);

console.log('after');
printMatrix(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]