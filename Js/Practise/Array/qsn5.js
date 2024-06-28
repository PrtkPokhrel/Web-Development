// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : c
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

myColor = ["Red", "Green", "White", "Black"];
newColor=myColor.toString()
console.log(newColor)
console.log(newColor.join('+'))
