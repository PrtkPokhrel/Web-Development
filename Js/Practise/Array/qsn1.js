// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

/*
function isArray(input){
    if (toString.call(input)=="[object Array]")
        return true

    else{
        return false
    }
}

let test1='i am  a string'
let test2=['i','am','a','array']

console.log(isArray(test1))
console.log(isArray(test2))

*/


//checks the type of object using the toString.call(input) which returns the type of the variable(input)
let arr = 12;
let ar ='hi'
console.log(toString.call(ar));
