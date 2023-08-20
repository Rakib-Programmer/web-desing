var n =parseInt(prompt("Enter Your Number"))
var sum= 0;
var serice =""

for(var i=1; i<=n; i++){
    sum += i**2
    serice +=(i**2).toString();
    if(i==n){continue};
    serice+=" + "
}
console.log(`${serice} = ${sum}`)

// console.log("sum end")

// for(var i=1; i<=n; i++){
//     sum += i**2
//     serice +=(i**2).toString()+" ";
//     console.log(serice)
// } 
// console.log(serice)
// console.log(sum) 