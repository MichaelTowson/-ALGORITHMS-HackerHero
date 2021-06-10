//Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parensValid(str) {
    let parenLeftCount = 0; 
    let parenRightCount = 0;

    for(let i=0; i<str.length; i++) {
        if(str[i] == "(") {
            parenLeftCount++
            continue;
        } ;
        if(str[i] == ")") {
            parenRightCount++ ;
        }
        if(parenRightCount > parenLeftCount){
            return false
        }
    }

    if(parenLeftCount == parenRightCount) { return true }
    return false
}

//TEST CASES
console.log(parensValid("Y(3(p)p(3)r)s")) // to return true
console.log(parensValid("N(0)t )0(k")) // to return false
console.log(parensValid("N(0)t (0(k))")) // to return true
console.log(parensValid("(N(0)t (0(k))")) // to return false
console.log(parensValid("()(N(0)t (0(k)))")) // to return true