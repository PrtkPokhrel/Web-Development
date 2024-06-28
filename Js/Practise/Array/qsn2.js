// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]




//Slice() does take a portion of the array but does not clone the array


// a=[1,2,3,4]
// let aClone=a.slice()
// let removing=aClone.pop()
// console.log(aClone)
// console.log(a)




// Using spread operator(Spread operaot is used to clone or merge the property of one obj to anothr obj.In simple word spread operator is used to spread the property of an object to another object)



// let a =[1,2,3,4]
// let b=[...a]
// console.log(a)
// console.log(b)





//Using Array.from()

// let a=[1,2,3,4,5]
// let aClone=Array.from(a)
// console.log(a)
// console.log(aClone)


