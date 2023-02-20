const fun = (state) => {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("Yeahhh .. Great success");
    } else {
      reject("Ohhh....failed");
    }
  });
};
let promise = fun(true);
promise
  .then((msg) => {
    console.log("first then", msg);
    return fun(false)
  })
  .then((msg) => {
    console.log("second then", msg);
  })
  .catch((err) => {
    console.log("catchh one", err);
  }).then((msg)=>{
    console.log("then three" , msg);
  })
