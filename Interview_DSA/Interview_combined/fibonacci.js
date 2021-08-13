function fib(n) {
  let val = [0, 1];

  if (n <= 2) return 1;
  for (let i = 2; i <= n; i++) {
    val[i] = val[i - 1] + val[i - 2];
  }
  return val[n];
}
console.log(fib(12));
