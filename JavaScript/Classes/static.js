class Person {
    static name = "sid"
    name = "mike"
}
class Student extends Person{
    logName (){
        console.log("logName" , this.name);
    }
   static logName(){
        console.log("logName static", this.name);

    }
}
const a = new Student()
// a.logName()
Student.logName()