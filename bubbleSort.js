//HACKERHERO SOLUTION:
function bubbleSort(arr) {
    for(var j=0; j<arr.length;j++) {
        for(var i=0; i<arr.length-1-j; i++) {
            if(arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

//MY ORIGINAL SOLUTION:
function bubbleSort2(arr) {
    let temp;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp; 
        }
        for(let y=i; y>=0; y--) {
            if(arr[y] < arr[y-1]) {
                temp = arr[y-1];
                arr[y-1] = arr[y];
                arr[y] = temp;  
            } else {
                break
            }
        }
    }
    return arr
}

//TEST CASES
console.log(bubbleSort([5,3,1,2])); // to return [1,2,3,5])
console.log(bubbleSort([5,4,3,2,1])); // to return [1,2,3,4,5]
console.log(bubbleSort([5, 3, 1, -1, -3])); // to return [-3,-1,1,3,5]
console.log(bubbleSort([5, 3, 1])); // to return [1,3,5]