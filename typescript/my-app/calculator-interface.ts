interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  PI: number;
}

let calculator: Calculator = {
  add: (a, b) => a + b,
  subtract(a, b) {
    return a - b;
  },
  PI: 3.14
}
