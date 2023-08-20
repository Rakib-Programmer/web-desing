class Person{
    constructor(fName, lName){
        this.firstName=fName;
        this.lastName=lName;
    }
    fullName(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

class costomar extends Person{
    constructor(fName, lName, dob, id){
        super(fName,lName);
        this.dob=dob;
        this.id=id

    }
}

let Proson1 = new Person("AAM", "Rakib") 
console.log(Proson1)
console.log(Proson1.fullName())
let costomar1= new costomar("Rakib", "Ahmmed", "10-02-2003","1234")
console.log(costomar1)
console.log(costomar1.fullName())