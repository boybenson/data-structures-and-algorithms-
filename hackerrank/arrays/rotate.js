const rotateArray = () => {
  let arr = [1, 3, 4, 6, 2];
  let d = 3;

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newPosition = i - d;
    if (newPosition < 0) {
      newArr[arr.length + newPosition] = arr[i];
    } else {
      newArr[newPosition] = arr[i];
    }
  }

  return newArr;
};

console.log(rotateArray());
