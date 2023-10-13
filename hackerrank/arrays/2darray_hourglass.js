const arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const hourGlass = () => {
  let rows = arr.length;
  let columns = arr[0].length;
  let max_hourglass_sum = -63;
  for (let i = 0; i < rows - 2; i++) {
    for (let j = 0; j < columns - 2; j++) {
      let current_hourglass_sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      max_hourglass_sum = Math.max(max_hourglass_sum, current_hourglass_sum);
    }
  }
  return max_hourglass_sum;
};

console.log(hourGlass);
