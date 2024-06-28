Arrays

arrays in js are the data struture that can hold multiple values in a single variable   


Array can be defined as the data structre which is used to store multiple value of different types in a single variable. Each element 
of the array can be selected by their index number which starts from index 0 .

example:

a=[22,1,42,415,63]

22 is the 0th element of the array a similarly 1 is the 1st element and vice versa


(literals are constant value assigned to constant variable)
(on the other hand array literal are the way of expressing the array using squre braces and commas)

There are two ways to create an array

first one is using the array literals and second one is array constructor

ex using array literals:
let a = [1,2,3,4]

ex using array constructor:
let a =new Array(1,2,3,4)



**push(place elements on last index) and unshift(places the elemets on first index) method can be used to add element in the array**

**pop('removes the last element'),shift('removes the last element'),splice('removes the given number of element starting from the give index) can be used to remove the elements from the array**


we can also increase and decrease the array length by using length property



*Array Concatenation*

let courses = ["HTML", "CSS", "JavaScript", "React"];
let otherCourses = ["Node.js", "Expess.js"]

we can concatenate(add) two array using concat() method 

**We can also convert the array into string using toString() method**



