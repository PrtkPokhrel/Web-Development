// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


function first(arr, num = 0) {
    if (num == 0) {
        return arr[0]
    }
    else {
        return arr.slice(0,num)

    }


}


console.log(first([1, 2, 3], 4))
console.log(first([1, 2, 3]))



//we can use at method to get the indexed value of an array
// let a=[['one'],1,2,3]
//  let b=a.at(0)

//console.log(b)



// //we can directly index the 0th element in the array

// let a=[[],['one'],1,2,3]
// console.log(a[0])








