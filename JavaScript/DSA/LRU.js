// function leastRepeatUnit (input){
//     let cache={};
//     if(Object.keys(input))

// }
// let obj ={
//     z:1,
//     a:1,
//     b:3,

// }
// console.log(obj);

const customFlat = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      newArr.push(...customFlat(element))
    } else {
      newArr.push(element);
    }
  });

  return newArr;
};
const arr = [1, 2, [2, 3, 4], 45, [3, [4, 5, [9, 80]]]];
console.log(customFlat(arr));
// customFlat(arr);
