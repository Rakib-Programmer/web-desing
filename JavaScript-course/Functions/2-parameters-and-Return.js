//Function parameter/argument
function somthing(Name){
    console.log(`Hello ${Name}`)
}
somthing("Rakib")

function SaySomthing(fname, lname){
    console.log(`Hello ${fname} ${lname}`)
}
var FirstName="Ahmmed Ali"
var LastName="Munshi Rakib"

SaySomthing(FirstName, LastName)

function SaySomthing(fname = "AAM", lname = "Rakib"){
    console.log(`Hello ${fname} ${lname}`)
}
var FirstName="Ahmmed Ali"
var LastName="Munshi Rakib"

SaySomthing(FirstName)


function addNum(a=0, b=0){
    console.log(a+b)
}
addNum(4,5)
addNum(3.32, 4)

function AddNum(a=0, b=0){
    return a+b
}
console.log(AddNum(4+4))

function add_num(a=0, b=0){
    return a+b
}
let sum = add_num(5, 7) 
console.log(sum)


function Add_Number(a=0, b=0){
    console.log(`${a} + ${b} = ${a + b}`)
    return a+b
    console.log("line after return")
    console.log("line after ")
}
var x = Add_Number(20, 20)
console.log(x)