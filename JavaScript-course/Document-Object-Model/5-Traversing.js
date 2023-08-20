let a ;
let list = document.querySelector('ul');
let listitem = document.querySelector('ul li:last-child')
a=list
a=listitem
a=list.children;
console.log(a);
a=list.children[2];
console.log(a);
// a=list.children[0].textConent='Hello'
// console.log(a)
a=list.children[1].children[0]
console.log(a)
a=list.children[0].children[0].href
console.log(a)
a=list.firstElementChild;
console.log(a)
console.log("listitem start")
a=listitem;
console.log(a)
a=listitem.children
console.log(a)
a=listitem.parentElement
console.log(a)
a=listitem.parentNode,
console.log(a)
a=listitem.parentElement.parentElement
console.log(a)