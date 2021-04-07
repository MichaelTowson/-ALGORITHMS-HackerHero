//Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

//SOLUTION
function arrayConcat(arr1, arr2){
//1. Setup: Create an empty array
    let newArray = [];

//2. Push values from the first array into newArray.
    for(let i=0; i<arr1.length;i++){
        newArray.push(arr1[i]);
    }

//3. Push values from the second array into it and return.
    for (let i=0; i<arr2.length; i++){
        newArray.push(arr2[i]);
    }
    return newArray;
}

//TEST CASES
console.log(arrayConcat([1,2], [3,4])) //should return [1,2,3,4]
console.log(arrayConcat([1,2], [3,4,5])) //should return [1,2,3,4,5]
console.log(arrayConcat([1,2,3], [3,4,5,6])) //should return [1,2,3,3,4,5,6]
console.log(arrayConcat([-1], [-5, 3])) //should return [1,-5,3]]