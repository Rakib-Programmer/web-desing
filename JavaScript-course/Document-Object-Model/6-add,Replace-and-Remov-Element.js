// create Element
let olItem = document.createElement('li');
//add Id and class
olItem.className = "new class"
olItem.id = "new-element0"
//add attribute
olItem.setAttribute("titie", "atitle a new element");
//add content
olItem.appendChild(document.createTextNode("javascrip"));
document.querySelector('ol').appendChild(olItem);
// console.log(olItem)

let ulItem = document.createElement('li')
let link = document.createElement('a')
link.appendChild(document.createTextNode("Instagram"))
link.setAttribute("href", "https://www.instagram.com");
ulItem.appendChild(link)
document.querySelector('ul').appendChild(ulItem)
// console.log(ulItem)
// console.log(link)

// Replacing Element
let newHadding = document.createElement("h1")
newHadding.appendChild(document.createTextNode("H1 new hadding"));
newHadding.className="Sampol-class"

let oldHadding = document.querySelector('h3')

let parent = document.querySelector('.continer')
parent.replaceChild(newHadding, oldHadding)
// console.log(newHadding)
// console.log(oldHadding)
// console.log(parent)

//Remove Element 

let listItem = document.querySelectorAll("li")
let list= document.querySelector('ul')
// listItem[0].remove()
// listItem[5].remove()
// list.removeChild(listItem[6])

list.classList.add('test');
list.classList.add("test-new");
list.classList.remove("test");

let val = list.hasAttribute('Title');
list.setAttribute('title', 'New Title')
list.removeAttribute('title')
console.log(val)
console.log(listItem)
console.log(list)