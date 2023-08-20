console.log("Befor Error")
try{
test()
}catch(err){
// console.log(err)
console.log(err.message)
console.log(err.name)
}finally{
    console.log("I am inside finally")
}
console.log("After Error")

let a = 4;
try{
    if(a>15)throw "too big"
    else if(a<5) throw "too small"
}catch(err){
    console.log(err)
}