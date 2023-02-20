Array.prototype.customMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i] , i , this));
  }

  return arr;
};
const newMap = [1, 2, 3, 4, 5].customMap((elem , index) => {
    console.log("index" , index);
  return elem + 2;
});
console.log(newMap);
