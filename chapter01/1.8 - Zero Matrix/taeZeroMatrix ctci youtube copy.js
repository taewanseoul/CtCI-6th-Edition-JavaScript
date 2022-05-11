/* Helper Functions */
var setZeroes = function(matrix) {
  let firstRowZero = false;
  let firstColZero = false;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        if (row === 0){
          firstRowZero = true;
        }

        if (col === 0) {
          firstColZero = true;
        }

        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRowZero) {
    matrix[0].fill(0);
  }

  if (firstColZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
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