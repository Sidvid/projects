function debounce(fun , delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.call(this, ...args);
    } , delay);

  };
}
const fun = (greet) => {
  console.log("this is debounce " + greet);
};
const test=debounce(fun , 2000)
console.log(test("Hey"));