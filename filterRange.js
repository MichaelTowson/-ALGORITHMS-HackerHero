//Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given an arr and min and max values, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. Do not use built-in array functions.

//SOLUTION
function filterRange(arr, min, max) {

}

//TEST CASES
console.log(filterRange([1,3,5,7,10], 4, 8)) //should return [5,7]
console.log(filterRange([1,3,5,7,10], -1, 4)) //should return [1,3]
console.log(filterRange([2,4,3,5], 2, 6)) //should return [4,3,5]
console.log(filterRange([2,4,3,5], 0, 4)) //should return [2,3]
console.log(filterRange([6,2,-3,5,7], 3, 8)) //should return [6,5,7]