const isPrime = (n) => {
  let result = null;

  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result = false;
    }
  }

  return result === false ? false : true;
};

console.log(isPrime(1));
