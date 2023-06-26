// const fib = (n) => {
//     const fibArray = [];
//     fibArray[0] = 0;
//     fibArray[1] = 1;
//     for (let i = 2; i <= n; i++) {
//       fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
//     }
//     console.log(fibArray);
//   };

//   fib(5);

const fibRecursive = (n) => {
  if (n < 2) {
    return n;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

console.log(fibRecursive(7));
