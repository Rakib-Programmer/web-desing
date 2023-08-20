//document.getElementsByClassName()
let a;
a=document.getElementsByClassName('simple-class')
console.log(a)
a=document.getElementsByClassName('simple-class')
a[0].style.background='red'
a[0].style.color='white'
a[0].style.padding='10px'
console.log(a)
//document.getElementsByTagName()
console.log("document.getElementsByTagName")
a=document.getElementsByTagName('li')
console.log(a[6])
a=document.querySelector('ol').getElementsByTagName('li');
console.log(a[2])
a=document.querySelector('ol').getElementsByTagName('li');
let list=Array.from(a);
list.forEach(function(a){
    console.log(a)
});

console.log("document.querySelectorAll")
//document.querySelectorAll()
a=document.querySelectorAll('ul li');
console.log(a)
a.forEach(function(item){
    console.log(item)
})
console.log("ForEach loop")
let liodd = document.querySelectorAll("li:nth-child(odd)");
liodd.forEach(function(item){
    item.style.background='gray'
    item.style.color='#fff'
})
let lievn = document.querySelectorAll("li:nth-child(even)");
lievn.forEach(function(item){
    item.style.background='red'
    item.style.margin='5px 30px'
})









