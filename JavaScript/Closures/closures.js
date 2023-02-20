function createCounter() {
  let a = 0;
  return function incCounter() {
    a++;
    return a;
  };
}
let test = createCounter();
let test2 = createCounter()
console.log("test",test());
console.log("test",test());
console.log("test",test());
console.log("test",test());

console.log("test2",test2());
console.log("test2",test2());
console.log("test2",test2());
