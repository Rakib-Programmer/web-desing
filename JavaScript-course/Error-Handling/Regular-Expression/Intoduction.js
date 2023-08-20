
let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i;// i= case insensitive
console.log(re);
console.log(re.source);

str = "Hello World"
// exec() = Returns result in an array or null
let result = re.exec(str)
console.log(result)
str = "Again Hello World"
result = re.exec(str)
console.log(result)

str = "Hell World"
result = re.exec(str)
console.log(result)


str = "dhsHellosddfgfg  World"
result = re.exec(str)
console.log(result)

str = "Hello World Hello"
result = re.exec(str)
console.log(result)

// test() = true/false
result = re.test(str)
console.log(result)
//match() = Returns array or null
str = "Again Hello World"
result=str.match(re) //match() or exec() same
console.log(result)

// replace() = Return new string
str = "Again Hello World Hello"
let newstr = str.replace(re, "hi")
console.log(newstr)


