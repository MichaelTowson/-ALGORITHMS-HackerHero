// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

function zipIt(arr1, arr2) {
    var count = arr1.length;
    var newArray = [];

    if(arr1.length < arr2.length) {
        count = arr2.length;
    }

    for(let i=0; i<count; i++) {
        if(arr1[i]){
            newArray.push(arr1[i]);
        }
        if(arr2[i]){
            newArray.push(arr2[i]);
        }
    }
    return newArray;

}

//TEST CASES
console.log(zipIt([1,2],[10,20,30,40])); //to return [1,10,2,20,30,40]
console.log(zipIt([1,2,3,4],[10,20])); //to return [1,10,2,20,3,4]
console.log(zipIt([1,2,3,4], [10,20,30,40])); //to return [1,10,2,20,3,30,4,40]
console.log(zipIt([1], [10,20])) //to return [1,10,20]
console.log(zipIt([1,2,3], [10])) //to return [1,10,2,3]
