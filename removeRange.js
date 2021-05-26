//Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end) {
    var newIdx = 0;
    var newArrayLength = 0;
    for(let i=0;i<arr.length;i++) {
        if(i < start || i > end) {
            arr[newIdx] = arr[i];
            newIdx++;
            newArrayLength++;
        }
    }
    arr.length = newArrayLength
    return arr;
}

//TEST CASES
console.log(removeRange([20,30,40,50,60,70], 2, 4)); //to return [20,30,70]
console.log(removeRange([20,30,40,50,60,70], 1, 3)); //to return [20,60,70]
console.log(removeRange([20,30,40,50,60,70], 1, 4)); //to return [20,70]
console.log(removeRange([1,2,3,4,5,6], 2, 5)); //to return [1,2]