//Math objectl
let a;
a=Math.PI
console.log(a)
a=Math.E
console.log(a)
a=Math.round(3.4)
console.log(a)
a=Math.ceil(1.4)//১বাড়বে 
console.log(a)
a=Math.floor(1.8)//১কমবে 
console.log(a)

a=Math.sqrt(81)
console.log(a)
a=Math.abs(-8)
console.log(a)
a=Math.pow(2, 4)
console.log(a)
a=Math.min(1, 4, 5, 9, 21)
console.log(a)
a=Math.max(2, 5, 9,32, 21)
console.log(a)
a=Math.random()
console.log(a)

a=Math.floor(Math.random()* 100 + 1 )
console.log(a)     
console.log("Math objectl end")
//date object

let x;
let today = new Date()
console.log(today)
let birthday = new Date(`02-15-2003 11:25:24`)
x= birthday
console.log(x)
birthday = new Date(`August 26 2003`)
x= birthday
console.log(x)

birthday = new Date(`02/15/2003`)
x= birthday
console.log(x)

x=today.getMonth()
console.log(x)
x=today.getDate()
console.log(x)
x=today.getDay()
console.log(x)
x=today.getFullYear()
console.log(x)
x=today.getHours()
console.log(x)
x=today.getMinutes()
console.log(x)
x=today.getSeconds()
console.log(x)
x=today.getMilliseconds()
console.log(x)
x=today.getTime()
console.log(x)

birthday.setMonth(1)
console.log(birthday)
birthday.setDate(24)
console.log(birthday)
birthday.setFullYear(1995)
console.log(birthday)
birthday.setHours(18)
console.log(birthday)
birthday.setMinutes(30)
console.log(birthday)
