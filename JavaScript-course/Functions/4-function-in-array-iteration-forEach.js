// array iteration forEach
let food = ["cake", "Ice Cream", "apple",]
let foods=["cake", "Ice Cream", "apple", "chociates"]

//1st parameter: Item
//2nd parameter:Index
//3rd parameter: all array

food.forEach(function(value){
    console.log(value)
})

foods.forEach(function(item, Index, all_abc){
    console.log(`Index: ${Index} and Item: ${item} `)
    console.log(all_abc)
})

console.log("------------------------------------")
let printEvery = function(Item, index, all_abc){
    console.log(`
    Item: ${Item} and Index: ${index} 
    `)
    console.log(all_abc)
}

foods.forEach(printEvery)
console.log(" array iteration forEach End---")
// array iteration Mapping ---------------------
//1st parameter: Value
//2nd parameter:Index
//3rd parameter: all array

function addSamthing(item){
    return `${item} is a foot`
}
let Arr_all = food.map(addSamthing)
console.log(Arr_all)

var number=[1, 3, 43, 2, 24];

let Index_squer= number.map(function(item){
    return item*item

})
console.log(Index_squer)