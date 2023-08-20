var student={name:"Rakib", age:20, home:"chandpur"}
console.log(student)
b=student["name"]
console.log(b)
b=student["age"]
console.log(b)
b=student.name
console.log(b)

b=student["occu"]="student"//object add
console.log(student)
b=student.village="sreepur"
console.log(student)

b = delete student.village//object delete
console.log(student)

b=student={}   // all delete
console.log(student)


b=student.name="Ahmmed"
console.log(student)
b=student.age=22
console.log(student)
