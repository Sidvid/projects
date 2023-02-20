this.name = "sidddhartha";
this.age=90;
const data = {
  name: "mike",
  age: 30,
  getDetails() {
    return function (){
        console.log("inner" , this.name , this.age);
    }
  },
  getData: () => {
    console.log("arrow function ", this.name, this.age);
  },
};
const test=data.getDetails()
// console.log(test());
// data.getData()
data.getDetails()