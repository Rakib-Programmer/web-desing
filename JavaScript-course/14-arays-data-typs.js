var a=["Bangladish", "us ", "uk"];
console.log(a)

var b=["Bangladish", "us ", "uk"]
console.log(b[2])
console.log(b[0])
console.log(b.length)
c=a[1]="canada"//1 number জায়গায় add করবে 
console.log(a)

c=a[3]="polan" //3 number জায়গায় add করবে 
console.log(a)

c=a[a.length]="sewden" //শেষ থেকে add করবে
console.log(a)

c=a.push("china", "japan") //শেষ থেকে add করবে
console.log(a)

c=a.pop()    //শেষ থেকে বাদ করবে
console.log(a)

c=a.shift()  //প্রথম থেকে বাদ করবে
console.log(a)

c=a.unshift("bangladish") //প্রথম থেকে add করবে
console.log(a)
c=a.sort() //সাজানো হয়
console.log(a)
c=a.reverse() 
console.log(a)


var x="london, canada, babgladish"  //string 
y=x.split("")
console.log(y)
y=x.split()
console.log(y)  //aray
y=x.split("a") //A কে ভাগ করবে কিন্তু a আসবে না
console.log(y)
y=x.split(" ") // spass কে ভাগ করবে
console.log(y)
y=x.split(",")
console.log(y)


y=x.split(" ")
console.log(y)
z=y.toString() //string a convart
console.log(z)
z=y.join("/") // সবগুলো ওয়ার্ডের শুরুতে একটি করে / দিবে 
console.log(z)
z=y.join(" ") //সবগুলো  ওয়ার্ডের শুরুতে একটি করে spass দিবে 



console.log(z)





