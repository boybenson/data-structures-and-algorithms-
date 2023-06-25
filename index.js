const summation = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};
console.log(summation(10000000000));

const summation2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(summation2(1000000000000));
