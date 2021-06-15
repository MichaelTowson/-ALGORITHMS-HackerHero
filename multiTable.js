//Create a function that prints a multiplication table such as follows:
// multiTable(2,2) should print 1 2 2 4
//multiTable(3,3) should print 1 2 3 2 4 6 3 6 9

function multiTable(x,y) {
    for(let i=1; i<=y; i++) {
        for(let r=1; r<=x; r++) {
            console.log(i*r);
        }
    }
    
}

console.log(multiTable(2,2)); //Should log 1 2 2 4
console.log(multiTable(3,3)); //Should log 1 2 3 2 4 6 3 6 9
console.log(multiTable(2,4)); //Should log 1 2 2 4 3 6 4 8
console.log(multiTable(5,8)); //Should log  1 2 3 4 5 2 4 6 8 10 3 6 9 12 15 4 8 12 16 20 5 10 15 20 25 6 12 18 24 30 7 14 21 28 35 8 16 24 32 40