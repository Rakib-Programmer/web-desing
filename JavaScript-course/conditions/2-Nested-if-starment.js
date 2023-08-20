var a=prompt("Enter Your First Number")
a=parseInt(a)
var b=prompt("Enter Your Secound Number")
b=parseInt(b)
var c=prompt("Enter Your Third Number")
c=parseInt(c)

if (a>=b){
    if(a>=c){
        console.log("Your largest number is: "+a)
    }
    else{
        console.log("Your largest number is: "+c)
    }
}
else{
    if(b>=c){
        console.log("Your largest number is: "+b)
    }
    else{
        console.log("Your largest number is: "+c)
    }
}

