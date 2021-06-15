//Create a function that returns a two dimensional array containing bunch of zeros. For example twoDimensional(2,5) should return a following array:

//[
//[ 0, 0, 0, 0, 0],
//[ 0, 0, 0, 0, 0 ]
//]

function twoDimensional(row, column) {
    let solutionArr = [];
    let newArr = [];

    for(let i = 0; i < row; i++) {
        for(let r = 0; r<column; r++) {
            newArr.push(0);
        }
        solutionArr.push(newArr);
        newArr = [];
    }
    return solutionArr;
}

//TEST CASES
console.log(twoDimensional(2,5)) //to return [[0,0,0,0,0],[0,0,0,0,0]]
console.log(twoDimensional(3,4)) //to return [[0,0,0,0],[0,0,0,0],[0,0,0,0]]
console.log(twoDimensional(1,5)) //to return [[0,0,0,0,0]]