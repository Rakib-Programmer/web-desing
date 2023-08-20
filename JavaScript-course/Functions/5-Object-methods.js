let person={
    firstName:"AAM",
    lastName: "Rakib",
    dob: "15-02-2003",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }

}
console.log(person.lastName);
console.log(person.fullName())

