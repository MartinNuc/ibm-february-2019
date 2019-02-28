function factorialRecursion(n) {
  // 2 = 2 = 1 * 2
  // 1 = 1 = 1
  if (n <= 2) { return n; }
  return factorialRecursion(n-1) * n;
}
console.log(factorialRecursion(5)); // expect it to be 120 




function factorialUsingForLoop(n) {
  let acc = 1;
  for(let i = 1; i <= n; i++) {
    acc = acc * i;
  }
  return acc;
}

console.log(factorialUsingForLoop(5)); // expect it to be 120 