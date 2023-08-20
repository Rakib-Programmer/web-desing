//primitive types
//number, string, boolean
//value নিয়ে কাজ করে 
let a=7;
let b=a;

a=45;
console.log(b)

// Reference types
//array, object
//address নিয়ে কাজ করে 
let number=[1,2,3]
let newnumber=number;
console.log(newnumber)
number[1]=500;
console.log(number)
console.log(newnumber)