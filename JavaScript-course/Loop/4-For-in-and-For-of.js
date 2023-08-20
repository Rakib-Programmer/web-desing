//For-in : string""/array[]/object{} 
//For-of :  string""/array[]
// in use করলে index পাব
// of use করলে value / item  পাব
var Name="I am learning javascrip"
let food = ["cake", "Ice Cream", "apple",]
var person={
    Name:"shakib al hasan",
    profession:"cricketer",
    Team:"bangladish",
    age: 33,
}
console.log("  in use করলে index পাব")
for(var x in Name){
    console.log(`index: ${x} and item: ${Name[x]}`)
}
console.log("   of use করলে value / item  পাব")
for(var x of Name){
    console.log(x)
}

console.log("  in use করলে index পাব")
for(var x in food){
    console.log(`index: ${x} and item: ${food[x]}`)
}

console.log("   of use করলে value / item  পাব")
for(var x of food){
    console.log(x)
}
// object কোন index সিস্টেম নাই তাই  value print করে 

console.log("   of use করলে value / item  পাব")
for (var x in person){
    console.log(`
    property: ${x} and value: ${person[x]} `)
}
console.log("   of use করলে value / item  পাব")
for(var x of person){
    console.log(x)
}

