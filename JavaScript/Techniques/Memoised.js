const powFour = (num) => {
  return num * num * num * num;
};
// console.time("time1");
// console.log(powFour(4));
// console.timeEnd("time1")
// console.time("time2");
// console.log(powFour(4));
// console.timeEnd("time2")
// console.time("time3");
// console.log(powFour(4));
// console.timeEnd("time3")
// console.time("time4");
// console.log(powFour(4));
// console.timeEnd("time4")

const memo = (fun) => {
  let res = {};
  return (...args) => {
    let argsKey = JSON.stringify(args);
    if (!res[argsKey]) {
      res[argsKey] = fun(...args);
    }
    return result[argsKey];
  };
};
const result = memo((num) => {
  console.log("params", num);
  return num * num * num * num;
});

console.time("time1");
console.log(result(4));
console.timeEnd("time1");
console.time("time2");
console.log(result(4));
console.timeEnd("time2");
console.time("time3");
console.log(result(4));
console.timeEnd("time3");
console.time("time4");
console.log(result(4));
console.timeEnd("time4");
