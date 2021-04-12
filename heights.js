//Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings. The first is out of view below street level. Behind it, the second building is 7 stories high. The third building is 3 stories high (hidden behind the 7-story). You are situated at street level. Return an array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

//SOLUTION
function heights(arr) {
//1. Create variables
    let newArray = [];
    let highestVisibleLevel = 0 //0 is ground level. Every subsequent building that can be seen will increase this to its height, effectively "covering up" smaller buildings that come after it.

//2. Loop through the given array. Push the first value that is greater than highestVisibleLevel into the array. Then set highestVisibleLevel to that value and repeat until the end of the array. Return newArray.
    for(let i=0;i<arr.length;i++){
        if(arr[i]>highestVisibleLevel){
            newArray.push(arr[i]);
            highestVisibleLevel = arr[i];
        }
    }
    return newArray;    
}


//TEST CASES
console.log(heights([-1, 1, 1, 7, 3])); //should return [1,7]
console.log(heights([0, 4])); //should return [4]
console.log(heights([-1, 1, 1, 7, 3, 5, 9])); //should return [1,7,9]
console.log(heights([-1, 1, 1, 7, 3, 5, 9, -3, 3, 15])); //should return [1,7,9,15]