//Using recursion, write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).

//For example, factorial(3) = 6 (or 123); factorial(5) = 120 (or 12345).

//For this challenge, do not worry about time-complexity of your code yet.

function factorial(n) {
  if(n == 1) {
      return n;
  }
  return n * factorial(n-1)
}
console.log(factorial(3)) //to return 6
console.log(factorial(5)) //to return 120
console.log(factorial(10)) //to return 3628800
