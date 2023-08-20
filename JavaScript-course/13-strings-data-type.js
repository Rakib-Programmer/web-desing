var a, b, c;
a="hello world"
console.log(a)

a="hello '''''' world"
console.log(a)

a='hello """""" world'
console.log(a)

a="hello\" world"
console.log(a)

a="hello\\ world"
console.log(a)

a="hello\t world"
console.log(a)

a="hello\t\t world"
console.log(a)
a="hello\nworld"
console.log(a)
a="hello"
b="world"
c=a+b
c.length
console.log("c.length=",c.length)

a="hello world".length
console.log(a)

a="hello world"[0]
console.log(a)
a="hello world"[1]
console.log(a)
a="hello world".toUpperCase();
console.log(a)
a="HELLO WORLD".toLocaleLowerCase()
console.log(a)
a="  hello world  ".trim()
console.log(a)

a="hello world".slice(1, 5)
console.log(a)

a="hello world".slice(-5, -0)
console.log(a)
a="hello world".slice(2)
console.log(a)

a="Hello world".replace("world", "Rakib")
console.log(a)
a="hello world ".concat(a, "sadlfd")
console.log(a)
