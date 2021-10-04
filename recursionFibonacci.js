// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two,
// starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value,
// 4 corresponds to the value four later, etc).

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2
// (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).

function fib(n) {
    if (n < 2) {
      return n;
    } 
    return fib(n-2)+fib(n-1);
}

console.log(fib(0)) //to return 0
console.log(fib(1)) //to return 1
console.log(fib(2)) //to return 1
console.log(fib(3)) //to return 2
console.log(fib(4)) //to return 3
console.log(fib(5)) //to return 5
console.log(fib(6)) //to return 8
console.log(fib(7)) //to return 13
console.log(fib(20)) //to return 6765
