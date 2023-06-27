const linearSearch = () => {
  const arr = [8, 20, 10, 15, 17, 21];
  const t = 100;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch());
