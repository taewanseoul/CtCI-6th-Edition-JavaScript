var rotateMatrix = function(matrix) {
  let n = matrix.length;

  for (let layer = 0; layer < (n / 2); layer++) {
    let first = layer;
    let last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;

      // save top
        let top = matrix[first][i];
      // top = left
        matrix[first][i] = matrix[last - offset][first];
      // left = bottom
        matrix[last - offset][first] = matrix[last][last - offset];
      // bottom = right
        matrix[last][last - offset] = matrix[i][last];
      // right = saved top
        matrix[i][last] = top;
    }
  }
};


/* TEST */
var testMatrix = [
[1, 2, 3, 4],
[0, 1, 2, 3],
[0, 0, 1, 2],
[1, 0, 0, 1]
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
