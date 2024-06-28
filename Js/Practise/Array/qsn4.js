// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]





function last(arr,num=0){
  let arrlength=arr.length
  if (num==0){
    return arr[arr.length-1];
  }
  else{
   return arr.slice(arrlength-num)
  }
}

console.log(last([1,2,4,5]))



