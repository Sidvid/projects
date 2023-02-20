const wordChecker = (input) => {
  const obj = {};
  input.split("").map((elem) => {
    if (Object.keys(obj).includes(elem)) {
      obj[elem] = obj[elem] + 1;
    } else {
      obj[elem] = 1;
    }
  });
  return obj;
};
console.log(wordChecker("siddhartha"));