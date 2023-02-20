function createCounter() {
  let a = 0;
  return function incCounter() {
    debugger
    a++;
    return a;
  };
}
let test = createCounter();
let test2 = createCounter();
