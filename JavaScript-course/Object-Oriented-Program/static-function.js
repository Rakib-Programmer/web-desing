class Person{
    constructor(fName, lName){
        this.firstName=fName;
        this.lastName=lName;
    }
    fullName(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
    static test(){
        console.log("I am static")
    }
}

let Person1=new Person("Rakib", "Ahmmed")
console.log(Person1)
console.log(Person1.fullName())
console.log(Person.test())  //object thaka static function ke coll cora jave na but class thaka coll cora jave