/* Helper Functions */
var checkZeros = function(matrix) {
  const zeroRows = {};
  const zeroColumns = {};

  findZero(matrix);

  numToZero(matrix);

  function findZero (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];

      for (let j = 0; j < row.length; j++) {
        let element = matrix[i][j];

        if (element === 0) {
          zeroRows[i] = true;
          zeroColumns[j] = true;
        }
      }
    }
  }

  function numToZero (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];

      for (let j = 0; j < row.length; j++) {
        if (zeroRows[i] || zeroColumns[j]) {
          matrix[i][j] = 0;
        }
      }
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