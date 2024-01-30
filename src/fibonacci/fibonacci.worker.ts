export function fibonacci(n: number = 10) {
  if (n < 2) {
    return n;
  }
  const a = fibonacci(n - 1);
  const b = fibonacci(n - 2);
  return a + b;
}

module.exports = (n: number) => {
  return fibonacci(n);
};
