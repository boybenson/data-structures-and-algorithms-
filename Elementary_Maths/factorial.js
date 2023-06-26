// const factorial = (n) => {
//   let fact = 1;

//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }

//   console.log(fact);
// };

// factorial(5);

const factorialRec = (n) => {
  if (n <= 2) {
    return n;
  }

  return n * factorialRec(n - 1);
};

console.log(factorialRec(5));
