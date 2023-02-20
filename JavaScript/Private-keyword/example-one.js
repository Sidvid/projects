class Person {
  #password;
  constructor(name, age, password) {
    (this.name = name), (this.age = age);
    this.#password = password; //!cant access this password
  }
  getPassWord() {
    return this.#password;
  }
}
const p1 = new Person("sid", 30, "123");
console.log(p1); // Person { name: 'sid', age: 30 } //!this object does not have password field
console.log(p1.name); //sid
console.log(p1.age); //30
console.log(p1.password); //undefined
console.log(p1.getPassWord()); //123 //!we can get this password by getPassword method

console.log("X-------------------------------------X");
// ############################################### //Using function// #################################################

function person() {
  let count = 0;
  return {
    val: function () {
      return ++count;
    },
  };
}
const count1 = new person();
const count2 = new person();
console.log(count1.val());//1
console.log(count1.val());//2
console.log(count1.val());//3
//!Both count1 and count2 has their own private member
console.log(count2.val());//1
console.log(count2.val());//2
console.log(count2.val());//3
