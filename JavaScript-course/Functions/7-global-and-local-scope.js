//global and local scope with let and const (ES6)

//Var লিখে variable  একাধিক বার declare করা যাবে এবং মান পরিবর্তন করা যাবে 

// var a=30 
// a=20
// var a=40

//Let লিখে variable  একাধিক বার declare করা যাবে না কিন্তু মান পরিবর্তন করা যাবে 
// let b=10
// b=10
//const  লিখে variable  একাধিক বার declare করা যাবে না এবং মান পরিবর্তন করা যাবে না

// const c=30

//global scope
var a=1
let b=2
const c=3
console.log(`Global Scope: `, a, b, c)
function test(){
    var a=4;
    let b=5;
    const c=6
    console.log(`Functions Scops: `, a, b, c)
}
test()
console.log(`Global Scope: `, a, b, c)
if(true){
    var a=7  //var দেওয়া থাকলে var এর   হবে 
    let b=8
    const c=9 //Let and const এর value কখনো পরিবর্তন হবে না 
    console.log(`if scope: `,a,b,c) 
}
console.log(`Global Scope: `, a, b, c)

for (let a=0; a<10; a++){
    console.log(`loop: `,a)
}
console.log(`Global Scope: `, a, b, c)