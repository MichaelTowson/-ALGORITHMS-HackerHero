//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. Do not use built-in functions.

function reverse(arr){
    //Check if the array is at least two indices long.
    if(arr.length<2){
        return "Error: Array too short. Please enter an array that includes at least two indices."
    }

    for(let i=0; i<arr.length/2; i++){
        let temp = arr[arr.length - 1 - i]; //Store the right-most index to be swapped.
        arr[arr.length-1-i] = arr[i];       //Swap the back and front values.
        arr[i] = temp;
    }
    return arr;
}

//TEST CASES
console.log(reverse([1])) //Error
console.log(reverse([1,2])) //[2,1]
console.log(reverse([1,3,5])) //[5,3,1]
console.log(reverse([-1,3,-5])) //[-5,3,-1]
console.log(reverse([1,2,3,4,5])) //[5,4,3,2,1]
console.log(reverse([2,10,13,15])) //[15,13,10,2]