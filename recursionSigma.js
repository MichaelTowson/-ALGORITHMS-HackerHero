//Using recursion, implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).
//Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(n) { 

  if(n == 0) {
    return n;
  }

  return n + sigma(n-1)
}

//TEST CASES
console.log(sigma(3)) // to return 6
console.log(sigma(5)) // to return 15
console.log(sigma(7)) // to return 28
console.log(sigma(10)) // to return 55