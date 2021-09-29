//Create a function twoDimensional(row, column) that returns a two dimensional array containing bunch of zeros but where the outer values are filled with ones. For example twoDimensional(5,5) should return the following array:

//[[ 1, 1, 1, 1, 1 ],
// [ 1, 0, 0, 0, 1 ],
// [ 1, 0, 0, 0, 1 ],
// [ 1, 0, 0, 0, 1 ],
// [ 1, 1, 1, 1, 1 ]]

//Assume that both row and column are greater than 2.

function twoDimensional(row, column) {
    let solutionArr = [];
    let newArr = [];
    console.log(row);

    for(let i = 0; i < row; i++) {
        for(let r = 0; r<column; r++) {
            if(i==0 || i==row-1) {
                newArr.push(1)
            } else if (r==0 || r==column-1) {
            newArr.push(1)
            } else {
                newArr.push(0)
            };
        }
        solutionArr.push(newArr);
        newArr = [];
    }
    return solutionArr;
}


console.log(twoDimensional(2,5)); //to return [[1,1,1,1,1],[1,1,1,1,1]]
console.log(twoDimensional(5,5)); //to return [[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]
console.log(twoDimensional(8,8)); //to return [[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1]]