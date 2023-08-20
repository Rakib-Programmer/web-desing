let a;
a=document.getElementById('document-title').id;
console.log(a)
//changing style
a=document.getElementById("document-title").style.background='#333';
console.log(a)
a=document.getElementById('document-title').style.color='#fff'
console.log(a)
a=document.getElementById('document-title').style.padding='10px'
console.log(a)
//changing content
a=document.getElementById('document-title').textContent='New Title'
console.log(a)
a=document.getElementById('document-title').innerText='Again New Title'
console.log(a)
a=document.getElementById('document-title').innerHTML='<i>Agine new Title <i>'
console.log(a)
a=document.getElementById('document-title');
a.innerText='Hello Rakib'
console.log(a)
//document.querySelector
a=document.querySelector('#document-title')
console.log(a)
a=document.querySelector('.document-title')
console.log(a)
a=document.querySelector('h3')
console.log(a)
a=document.querySelector('ol')
console.log(a)
a=document.querySelector('li')
console.log(a)
a=document.querySelector('ol li')
a.style.background='red'
a.style.color='#fff'
console.log(a)
a=document.querySelector('ol li:last-child')
a.style.background='#cfff'
console.log(a)
a=document.querySelector('li:nth-child(3)')
a.style.background='#EDf'
console.log(a)