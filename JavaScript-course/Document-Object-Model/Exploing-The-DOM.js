var a;
a=this;//this window same
console.log(a);
a=document; //document window.document same
console.log(a);
a=document.all
console.log(a)
a=document.all[5]
console.log(a)
a=document.all.length
console.log(a)
a=document.head
console.log(a)
a=document.body
console.log(a)
a=document.doctype
console.log(a)
a=document.domain
console.log(a)
a=document.URL
console.log(a)
a=document.forms[0]
console.log(a)
a=document.forms[0].method
console.log(a)
a=document.links[0].className
console.log(a)
a=document.links;
let linkArr=Array.from(a)
linkArr.forEach(function(a){
    console.log(a)
})
