class Person {
  constructor(name, age, height, gender) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.gender = gender;
    this.country = "India";
  }
  getHeight() {
    return `height of ${this.name} is ${this.height}`;
  }
  getAge() {
    return `Age of ${this.name} is ${this.age}`;
  }
  getGender() {
    return `Gender of ${this.name} is ${this.gender}`;
  }
}
class Student extends Person {
  constructor(name, age, height, gender) {
    super(name, age, height, gender);
    this.category = "Student";
  }
  getCategory() {
    return `${this.name} is a ${this.category}`;
  }
}
const robin = new Student("Robin", 30, 5, "male");
console.log(robin.getCategory());
console.log(robin.getHeight());
