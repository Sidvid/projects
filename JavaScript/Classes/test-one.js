

class Person {
  static qual = "B.tech";
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  //this method will be added in Person prototype.
   showData() {
    // console.log(this);
    console.log("this is show data");
    // console.log(`My name is ${this.name} and age is ${this.age} and gender is ${this.gender} : - ${this.qual}`);
  }
  hideData(){
    console.log(this.showData());
  }
}
const p1 = new Person("sid", 30, "male");
console.log( p1.hideData());