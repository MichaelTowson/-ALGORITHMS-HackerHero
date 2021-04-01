// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (1234.56,-1), return 5.


//SOLUTION
function extractDigit(num, digitNum) {
    if(digitNum >= 0) {
        let separator = 1
        for(let i=0; i<digitNum; i++){
            separator = separator * 10;
        }

        let remainder = num % separator;
        num = (num - remainder) / separator;

        num = num % 10;
        return num;
    } else {
    let separator = 1
        for(let i=0; i>digitNum; i--){
            separator = separator * 10;
        }

        num = num * separator;
        num = num - num % 1;
        num = num % 10;

        return num;
    }
}

//TEST CASES
console.log(extractDigit(1824, 2)) //to return 8
console.log(extractDigit(1824,0)) //to return 4
console.log(extractDigit(1234.56,-1)) //to return 5
console.log(extractDigit(199.35, 0)) //to return 9
console.log(extractDigit(199.35, -1)) //to return 3
console.log(extractDigit(199.35, -2)) //to return 5