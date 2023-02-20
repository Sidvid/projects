new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
  reject("error");
}).catch(()=>{
    console.log("error")
}).then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("error");
  }
);
