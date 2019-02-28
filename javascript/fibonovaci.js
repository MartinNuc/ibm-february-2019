
// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 5! = factorial(4) * 5 = 120
// 4! = 1 * 2 * 3 * 4 = 24
// 4! = factorial(3) * 4 = 24
// 3! = 1 * 2 * 3 = 6
// 3! = factorial(2) * 3 = 6
// 2! = factorial(1) * 2 = 2
// 1! = factorial(0) * 1 = 1
// 0! = factorial(-1) * 0 = 0
// -1! = factorial(-2) * -1

let cache = {};

let fib = n => {
  if (n < 2) { return n; }
  let oneBack = cache[n-1] || fib(n-1);
  let twoBack = cache[n-2] || fib(n-2);
   cache[n] = oneBack + twoBack;
   return cache[n];
};
console.log(fib(50))


fibSingleLine = n => n < 2 ? n : fibSingleLine(n-1) + fibSingleLine(n-2);
console.log(fibSingleLine(5));
