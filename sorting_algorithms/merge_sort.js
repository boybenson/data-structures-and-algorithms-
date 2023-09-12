const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  return merge(leftArr, rightArr);
};

function merge(leftArr, rightArr) {
  let sorted = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sorted.push(leftArr.shift());
    } else sorted.push(rightArr.shift());
  }

  return [...sorted, ...leftArr, ...rightArr];
}

let arr = [1, 6, 2, 3, 9, -1, 7];
const finalSortedArray = mergeSort(arr);
console.log(finalSortedArray);
