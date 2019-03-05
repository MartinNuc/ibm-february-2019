import PI from "./pi";

function add(a: number, b: number): number {
  return a + b;
}

export function sumOfArray(array: number[]): number {
  let sum: number;
  sum = 0;
  for(let i = 0 ; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

export function circleArea(radius: number): number {
  return PI * radius ** 2;
}