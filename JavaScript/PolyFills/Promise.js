function MyPromise(executer) {
  let onReject;
  let onResolve;
  let isCalled = false;
  this.then = function (thenHandler) {
    onResolve = thenHandler;
    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    return this;
  };
  function reject(err) {
    if (typeof onReject === "function" && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }
  function resolve(val) {
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }
  executer(resolve, reject);
}

const myProm = new MyPromise(function (resolve, reject){
    resolve("I am resolved")

});
// console.log("myprom" , myProm);
myProm.then((mas) => {
  console.log(mas);
});
