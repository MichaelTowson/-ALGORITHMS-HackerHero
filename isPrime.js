// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug. For example, isPrime(3) should return true. isPrime(4) should return false as 4 is divisible by 2.

//SOLUTION
function isPrime(num) {
    for(let i=2; i<num; i++) {
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

//TEST CASES
console.log(isPrime(3)); //true
console.log(isPrime(4)); //false
console.log(isPrime(13)); //true
console.log(isPrime(65)); //false
console.log(isPrime(17)); //true 