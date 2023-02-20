function* A() {
  yield console.log("1");
  yield console.log("2");
  yield console.log("3");
  yield console.log("4");
  yield console.log("5");
  yield console.log("6");
}
function* B() {
  return [5, 6, 7];
}
const test = A();
console.log(test.next());
console.log(test.next());
console.log(test.next());
