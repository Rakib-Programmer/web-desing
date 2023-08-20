for(var x=1; x<=5; x++){
    console.log(x)
}
console.log("for loop X++ End")
for(var y=5; y>=1; y--){
    console.log(y)
}
console.log("for loop X++ End")


for(var z=1; z<=5; z++){
    console.log(z)
    if(z==3){
        break;
    }
}

console.log("for loop brack End")
console.log("for loop continue start")
for(var z=1; z<=5; z++){
    if(z==3){
        continue; //skip
    }
    console.log(z)
}
console.log("for loop continue End")
for(var x=1; x<=10; x++){
    if(x%2==1){
        continue;
    }
    console.log(x)
}