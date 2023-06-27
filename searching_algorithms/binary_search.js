const binary_search = () => {
  const sortedArr = [-5, 2, 4, 6, 10];
  const target = 2;

  let startIdx = 0;
  let endIdx = sortedArr.length - 1;

  while (startIdx <= endIdx) {
    let middleIdx = Math.floor((startIdx + endIdx) / 2);

    if (target === sortedArr[middleIdx]) {
      return middleIdx;
    }

    if (target > sortedArr[middleIdx]) {
      startIdx = middleIdx + 1;
    } else {
      endIdx = middleIdx - 1;
    }
  }

  return -1;
};

console.log(binary_search());
