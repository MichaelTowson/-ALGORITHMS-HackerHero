//Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given an arr and min and max values, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. Do not use built-in array functions.

//SOLUTION
function filterRange(arr, min, max) {
    //1. Define a pointer to keep track of the front value in our array.
    var pointer = 0;

    //2. Loop through the array. If a value is found that is between the min and max, copy it to the current front pointer and advance the front pointer to the next position.
    for(let i=0;i<arr.length;i++){
        if(arr[i] > min && arr[i] < max) {
            arr[pointer] = arr[i];
            pointer++;
        }
    }

    //3. At the end of the loop, set the length of the array to the index of the pointer, deleting all the remaining ones. Then return the adjusted array.
    arr.length = pointer;
    return arr;
}

//TEST CASES
console.log(filterRange([1,3,5,7,10], 4, 8)) //should return [5,7]
console.log(filterRange([1,3,5,7,10], -1, 4)) //should return [1,3]
console.log(filterRange([2,4,3,5], 2, 6)) //should return [4,3,5]
console.log(filterRange([2,4,3,5], 0, 4)) //should return [2,3]
console.log(filterRange([6,2,-3,5,7], 3, 8)) //should return [6,5,7]