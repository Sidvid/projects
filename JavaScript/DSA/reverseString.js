// const reverse = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(reverse("heelloo"))

//without helper functions

const reverseWithoutHelper = (str) => {
  let newStr = "";
  for (let i = str.length -1; i >= 0; i--) {
    let word = str[i];
    newStr = newStr + word;
    console.log( i,newStr);
  }
  return newStr;
};
console.log(reverseWithoutHelper("heeelllooo"));
