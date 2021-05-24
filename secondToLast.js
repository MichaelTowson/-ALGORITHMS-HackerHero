//Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(arr) {
    if(arr.length<2) {
        return null
    }
    return arr[arr.length-2]
}

//TEST CASES
console.log(secondToLast([42,true,4,"Kate",7])) //to return Kate
console.log(secondToLast([42,true,4,"Kate",7,9])) //to return 7
console.log(secondToLast([42,true,4,"Kate",7,9,"dojo","awesome"])) //to return "dojo"
console.log(secondToLast([1])) //to return null
