var a=30
console.log(a)

var b = 0xBB  //hexa_decimal
console.log(b)
y=b.toString()  //toString ar kaj string a convert corba
console.log(y)
x=b.toString(2)
console.log(x)
x=b.toString(16)
console.log(x)

var c = 3.1416
z=c.toPrecision(2)
console.log(z)

z=c.toPrecision(3)
console.log(z)
z=c.toPrecision(4)
console.log(z)
z=c.toPrecision(8)
console.log(z)

z=parseInt(c)
console.log(z)
z=parseFloat(c)
console.log(z)

z=parseFloat(c.toString(2))
console.log(z)

z=parseFloat(c.toString())
console.log(z)

var d = "Rakib"
console.log(isNaN(x))

var e = 2934
console.log(isNaN(e))